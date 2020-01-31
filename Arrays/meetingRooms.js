/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

/*
Notes Below:
line 33: if empty, no rooms are needed, return 0
line 34: sort by start times
line 35: start by placing the first meeting into the first room
line 37: then start iterating through the meetings
line 38/39: keep track of the current meeting and it's start time
line 40: keep a boolean of if the room has already been placed
line 42: iterate through the existing rooms
line 43: keep track of room
line 44: if you've already placed the meeting in the room list and run into it, continue to the next room
line 45: if the meeting in the current room has ended, clear that room
line 48: if the room is null and you haven't already found an empty room, place the meeting in that room and change the boolean to true so you don't place the meeting into any further rooms, but continue iterating so you can clear any rooms in which the meeting has ended
line 55: if you have reached the end of the array and have not yet placed your meeting in the room, it means you need a new room.
line 60: at the end, your rooms will be empty or have meetings in them, but regardless of whether they are occupied, you know that however many rooms thee are are how many you needed
*/

/* eslint-disable complexity */
const minMeetingRooms = intervals => {
  if (!intervals.length) return 0;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let rooms = [intervals.shift()];

  for (let i = 0; i < intervals.length; i++) {
    let meeting = intervals[i];
    let currentTime = meeting[0];
    let roomTaken = false;

    for (let j = 0; j < rooms.length; j++) {
      let room = rooms[j];
      if (room === meeting) continue;
      if (room[1] <= currentTime) {
        room = null;
      }
      if (room === null && !roomTaken) {
        rooms[j] = meeting;
        roomTaken = true;
      }
      if (j === rooms.length - 1 && !roomTaken) {
        rooms.push(meeting);
      }
    }
  }
  return rooms.length;
};

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
    [33, 55],
    [1, 3],
    [1, 55],
    [100, 100],
  ])
);
