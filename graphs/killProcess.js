/*
Given n processes, each process has a unique PID (process id) and its PPID (parent process id).

Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.

We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.

Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.

Example 1:
Input:
pid =  [1, 3, 10, 5]
ppid = [3, 0, 5, 3]
kill = 5
Output: [5,10]
Explanation:
           3
         /   \
        1     5
             /
            10
Kill 5 will also kill 10.
*/

const killProcess = (pid, ppid, kill) => {
  let deleted = [kill];
  let parents = [kill];
  while (parents.length) {
    let parent = parents.shift();
    for (let i = 0; i < ppid.length; i++) {
      let currPar = ppid[i];
      if (currPar === parent) {
        let node = pid[i];
        deleted.push(node);
        parents.push(node);
      }
    }
  }
  return deleted;
};

console.log(killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5));
console.log(
  killProcess(
    [25, 3, 7, 4, 6, 10, 5, 8, 1, 9, 2],
    [7, 7, 6, 7, 0, 5, 8, 6, 9, 8, 9],
    8
  )
);
