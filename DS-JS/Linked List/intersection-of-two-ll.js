// https://leetcode.com/problems/intersection-of-two-linked-lists/
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3 Output: Intersected at '8'
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1 Output: Intersected at '2'

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  // Traverse both lists
  while (pA !== pB) {
    if (pA === null) pA = headB;
    else {
      pA = pA.next;
    }
    // If pA reaches the end, switch to headB
    // pA = pA === null ? headB : pA.next;

    // If pB reaches the end, switch to headA
    pB = pB === null ? headA : pB.next;
  }

  // Either they meet at the intersection or both become null
  return pA;
}
