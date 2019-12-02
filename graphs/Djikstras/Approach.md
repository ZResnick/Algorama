One of the most famous and widly used algorithms.
Find the shortest path between two vertices on a weighted graph.
Used in GPS, Network Routing, Biology and Pathogen Tracking, Airline tickets, etc..

## Approach

1.  Everytime we look to visit a new node, we pick the node with the smallest known distance to visit first.

2.  Once we've moved to the node we're going to visit, we look at each of it's neighbors.

3.  For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking FROM THE STARTING NODE.

4.  If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
