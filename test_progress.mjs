// Automated verification for Topic Progress Indicators in FluentEdge
import { TOPICS } from './js/data/topics.js';

console.log("=== FLUENTEDGE: TOPIC PROGRESS INDICATORS TEST SUITE ===");

// Mock localStorage
const storage = {};
global.localStorage = {
  getItem: (k) => (k in storage ? storage[k] : null),
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; }
};

// Simplified test harness modeling FluentEdgeApp progress engine
class TestTopicTracker {
  constructor(topics) {
    this.topics = topics;
    this.topicProgress = this.loadTopicProgress();
  }

  loadTopicProgress() {
    let progress = {};
    try {
      const saved = localStorage.getItem('fluentedge_topic_progress');
      if (saved) progress = JSON.parse(saved);
    } catch (e) {}

    try {
      const history = JSON.parse(localStorage.getItem('fluentedge_history') || '[]');
      history.forEach(item => {
        if (item.type === 'writing') {
          const topic = this.topics.find(t => 
            (item.topicId && t.id === item.topicId) || 
            (item.topicTitle && t.title === item.topicTitle)
          );
          if (topic) {
            const key = topic.id;
            const existing = progress[key];
            if (!existing || (item.percentage !== undefined && item.percentage > (existing.percentage || 0))) {
              progress[key] = {
                evaluated: true,
                score: item.score,
                percentage: item.percentage,
                band: item.band,
                meetsThreshold: item.meetsThreshold,
                targetLevel: item.targetLevel || 'C1',
                date: item.date
              };
            }
          }
        }
      });
    } catch (e) {}

    return progress;
  }

  recordTopicEvaluation(topicId, result) {
    const existing = this.topicProgress[topicId];
    this.topicProgress[topicId] = {
      evaluated: true,
      score: result.score,
      percentage: result.percentage,
      band: result.band,
      meetsThreshold: result.meetsThreshold,
      targetLevel: result.targetLevel,
      date: result.date,
      bestScore: existing && existing.bestScore ? Math.max(existing.bestScore, result.score) : result.score,
      bestPercentage: existing && existing.bestPercentage ? Math.max(existing.bestPercentage, result.percentage) : result.percentage,
      attemptsCount: ((existing && existing.attemptsCount) || 0) + 1
    };
    localStorage.setItem('fluentedge_topic_progress', JSON.stringify(this.topicProgress));
  }

  getProgressStats() {
    const completedCount = this.topics.filter(t => this.topicProgress[t.id]?.meetsThreshold).length;
    const attemptedCount = this.topics.filter(t => this.topicProgress[t.id]?.evaluated).length;
    return {
      completedCount,
      attemptedCount,
      total: this.topics.length,
      completionRate: Math.round((completedCount / this.topics.length) * 100)
    };
  }

  getTopicBadgeState(topicId, hasDraft = false) {
    const prog = this.topicProgress[topicId];
    if (prog?.evaluated) {
      if (prog.meetsThreshold) {
        return { status: 'status-passed', icon: '✓', label: `Evaluated • ${prog.band} (${prog.percentage}%)` };
      } else {
        return { status: 'status-revision', icon: '⟳', label: `Evaluated • Needs Revision (${prog.percentage}%)` };
      }
    }
    if (hasDraft) {
      return { status: 'status-draft', icon: '✎', label: 'Draft in Progress' };
    }
    return { status: 'status-unattempted', icon: '○', label: 'Not Attempted' };
  }
}

// TEST 1: Initial state (clean storage)
console.log("\n[TEST 1] Initial empty state");
const tracker = new TestTopicTracker(TOPICS);
const stats1 = tracker.getProgressStats();
console.log("Stats on init:", stats1);
if (stats1.completedCount !== 0 || stats1.attemptedCount !== 0) {
  throw new Error("Initial stats should be 0/0");
}
const badge1 = tracker.getTopicBadgeState(TOPICS[0].id);
console.log("Topic 1 badge:", badge1);
if (badge1.status !== 'status-unattempted') {
  throw new Error("Topic 1 should be unattempted");
}

// TEST 2: In-progress draft detection
console.log("\n[TEST 2] Draft in progress state");
const badgeDraft = tracker.getTopicBadgeState(TOPICS[0].id, true);
console.log("Topic 1 with draft:", badgeDraft);
if (badgeDraft.status !== 'status-draft' || badgeDraft.icon !== '✎') {
  throw new Error("Should show status-draft when text is present");
}

// TEST 3: Record passing evaluation for Topic 0
console.log("\n[TEST 3] Record Passing C1 Evaluation for Topic 0");
tracker.recordTopicEvaluation(TOPICS[0].id, {
  score: 18,
  percentage: 90,
  band: "Estimated C1 (Band 4)",
  meetsThreshold: true,
  targetLevel: "C1",
  date: new Date().toISOString()
});
const badgePassed = tracker.getTopicBadgeState(TOPICS[0].id);
console.log("Topic 1 badge after pass:", badgePassed);
if (badgePassed.status !== 'status-passed' || badgePassed.icon !== '✓') {
  throw new Error("Should show status-passed after evaluation");
}

// TEST 4: Record needs-revision evaluation for Topic 1
console.log("\n[TEST 4] Record Sub-threshold Evaluation for Topic 1");
tracker.recordTopicEvaluation(TOPICS[1].id, {
  score: 13,
  percentage: 65,
  band: "Estimated B2 (Band 3)",
  meetsThreshold: false,
  targetLevel: "C1",
  date: new Date().toISOString()
});
const badgeRevision = tracker.getTopicBadgeState(TOPICS[1].id);
console.log("Topic 2 badge after revision evaluation:", badgeRevision);
if (badgeRevision.status !== 'status-revision' || badgeRevision.icon !== '⟳') {
  throw new Error("Should show status-revision after failed threshold");
}

// TEST 5: Verify Curriculum stats update
console.log("\n[TEST 5] Progress stats after 2 attempts");
const stats2 = tracker.getProgressStats();
console.log("Stats:", stats2);
if (stats2.completedCount !== 1 || stats2.attemptedCount !== 2) {
  throw new Error(`Expected 1 completed and 2 attempted, got ${stats2.completedCount} and ${stats2.attemptedCount}`);
}

// TEST 6: Test Backfill from existing history
console.log("\n[TEST 6] Backfill from preexisting history log");
localStorage.removeItem('fluentedge_topic_progress');
const sampleHistory = [
  {
    type: 'writing',
    topicTitle: TOPICS[2].title,
    score: 19,
    percentage: 95,
    band: "Estimated C2 (Band 5)",
    meetsThreshold: true,
    targetLevel: "C2",
    date: new Date().toISOString()
  }
];
localStorage.setItem('fluentedge_history', JSON.stringify(sampleHistory));

const trackerReinit = new TestTopicTracker(TOPICS);
const stats3 = trackerReinit.getProgressStats();
console.log("Stats after backfill:", stats3);
const topic3Badge = trackerReinit.getTopicBadgeState(TOPICS[2].id);
console.log("Topic 3 badge from history:", topic3Badge);
// TEST 7: Bento Carousel Window Calculation (Fixed slots, shifting numbers)
console.log("\n[TEST 7] Bento Carousel Window Calculation & Number Shifting");
function computeBentoWindow(currentIndex, totalTopics) {
  const offsets = [-2, -1, 0, 1, 2];
  return offsets.map((offset, slotIdx) => {
    const topicIndex = ((currentIndex + offset) % totalTopics + totalTopics) % totalTopics;
    return {
      slotIndex: slotIdx,
      offset: offset,
      topicNumber: topicIndex + 1,
      isActive: offset === 0
    };
  });
}

// Current Topic 0 (Prompt #1) in 12 topics
const window0 = computeBentoWindow(0, 12);
console.log("Topic 0 (Prompt #1) Window:", window0.map(w => `#${w.topicNumber}${w.isActive ? ' (ACTIVE)' : ''}`));
if (window0[2].topicNumber !== 1 || !window0[2].isActive) {
  throw new Error("Center slot must be Prompt #1 and active");
}
if (window0[0].topicNumber !== 11 || window0[1].topicNumber !== 12 || window0[3].topicNumber !== 2 || window0[4].topicNumber !== 3) {
  throw new Error("Wrapping around boundary failed for Prompt #1");
}

// Advancing to Topic 1 (Prompt #2) - Boxes change numbers, selection stays in center (slot 2)
const window1 = computeBentoWindow(1, 12);
console.log("Topic 1 (Prompt #2) Window:", window1.map(w => `#${w.topicNumber}${w.isActive ? ' (ACTIVE)' : ''}`));
if (window1[2].topicNumber !== 2 || !window1[2].isActive) {
  throw new Error("Center slot must be Prompt #2 and active");
}
if (window1[0].topicNumber !== 12 || window1[1].topicNumber !== 1 || window1[3].topicNumber !== 3 || window1[4].topicNumber !== 4) {
  throw new Error("Number shifting failed for Prompt #2");
}

// Last topic in 12 topics (Prompt #12)
const window11 = computeBentoWindow(11, 12);
console.log("Topic 11 (Prompt #12) Window:", window11.map(w => `#${w.topicNumber}${w.isActive ? ' (ACTIVE)' : ''}`));
if (window11[2].topicNumber !== 12 || !window11[2].isActive) {
  throw new Error("Center slot must be Prompt #12 and active");
}
if (window11[3].topicNumber !== 1 || window11[4].topicNumber !== 2) {
  throw new Error("Forward wrapping failed for Prompt #12");
}

// Scalability Test: Future 50 Topics
console.log("\n[TEST 8] Scalability Test with 50 Future Topics");
const window50 = computeBentoWindow(24, 50); // Prompt 25
console.log("Prompt #25 in 50 Topics Window:", window50.map(w => `#${w.topicNumber}${w.isActive ? ' (ACTIVE)' : ''}`));
if (window50[2].topicNumber !== 25 || window50[0].topicNumber !== 23 || window50[4].topicNumber !== 27) {
  throw new Error("Scalability test for 50 topics failed");
}

console.log("\n>>> ALL TOPIC PROGRESS & BENTO CAROUSEL TESTS PASSED SUCCESSFULLY! <<<");

