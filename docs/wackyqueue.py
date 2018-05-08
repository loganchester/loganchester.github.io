"""
# Copyright Nick Cheng, 2018
# Distributed under the terms of the GNU General Public License.
#
# This file is part of Assignment 1, CSCA48, Winter 2018
#
# This is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This file is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this file.  If not, see <http://www.gnu.org/licenses/>.
#
# Name: Logan Chester
# Student Number: 1003545791
# Date: February 20, 2018
"""

from wackynode import WackyNode

# Do not add import statements or change the one above.
# Write your WackyQueue class code below.


class WackyQueue():
    '''A class that organizes data based on a given priority, manipulate the
    data by changing priorities and keeps track of the highest priority item'''

    def __init__(self):
        '''
        (WackyQueue) -> NoneType
        Create an instance of WackyQueue
        '''
        # Representation Invariant
        # _odd_head is the head of a linked list of WackyNodes
        # _even_head is the head of a linked list of WackyNodes
        # if WackyQueue is not empty:
        # _odd_head contains the highest prioritized item in WackyQueue
        # -odd_head contains every other item in the WackyQueue, starting at 1
        # _even_head contains the second highest prioritized item in WackyQueue
        # _even_head contains every other item in the WackyQueue, starting at 2

        # create two instance variables that will point to the heads of two
        # linked lists once we have nodes to process
        self._odd_head = None
        self._even_head = None

    def insert(self, obj, pri):
        '''
        (WackyQueue, obj, int) -> NoneType
        Places obj with a priority of pri into the WackyQueue
        '''
        # what happens when there is nothing in either list
        if ((self._odd_head is None) and (self._even_head is None)):
            # we can make a new wacky node using obj and pri that is the head
            # of the odd list
            self._odd_head = WackyNode(obj, pri)
        # what happens if the odd list has an actual head, but the even list
        # does not
        elif ((self._odd_head is not None) and (self._even_head is None)):
            # what happens if pri > _odd_head_priority
            if pri > self._odd_head.get_priority():
                # make a new node that will become the odd head
                new_odd = WackyNode(obj, pri)
                # make a new node that will become the even head
                new_even = WackyNode(self._odd_head.get_item(),
                                     self._odd_head.get_priority())
                # now set the heads accordingly
                self._odd_head = new_odd
                self._even_head = new_even
            # what happens if pri <= _odd_head_priority
            else:
                # we can make a new wacky node using obj and pri that is the
                # head of the even list
                self._even_head = WackyNode(obj, pri)
        # what happens if both the odd head and the even head have items other
        # than none
        elif((self._odd_head is not None) and (self._even_head is not None)):
            # create a new wacky node with item obj and priority pri
            new_node = WackyNode(obj, pri)
            # obtain the priority of the odd and even heads of the lists
            odd_head_pri = self._odd_head.get_priority()
            even_head_pri = self._even_head.get_priority()
            # what happens if the priority of the new node is greater than that
            # of one of the heads
            if pri > odd_head_pri:
                # the new node will now point to the head of the even list
                new_node.set_next(self._even_head)
                # the entirety of the odd_list, inlcluding its head, becomes
                # the even list (so the odd head becomes the even head)
                self._even_head = self._odd_head
                # the new node becomes the head of the odd_list
                self._odd_head = new_node
            elif (even_head_pri < pri <= odd_head_pri):
                # the new node will point to the node after the head of the
                # odd list
                new_node.set_next(self._odd_head.get_next())
                # the head of the odd list will point to the head of the even
                # list
                self._odd_head.set_next(self._even_head)
                # the new node will become the head of the even list
                self._even_head = new_node
            # what happens if the new nodes priority is not greater than one of
            # the existing list heads priorities
            else:
                # set a variable to track current and next node in each list
                curr_odd = self._odd_head
                curr_even = self._even_head
                next_odd = self._odd_head.get_next()
                next_even = self._even_head.get_next()
                # set up a tracker for when we insert the new_node
                tracker = "NOTNONE"
                # we need to loop to ensure we have inserted the new_node in
                # correct location (this will occur when we change tracker to
                # None)
                while tracker is not None:
                    # what happens if next_odd is None
                    if next_odd is None:
                        # we can simply point curr_odd to new_node
                        curr_odd.set_next(new_node)
                        # tracker becomes None
                        tracker = None
                    # what happens if next_even is None
                    elif next_even is None:
                        # we can simply point curr_even to new_node
                        curr_even.set_next(new_node)
                        # tracker becomes None
                        tracker = None
                    # what happens if pri > next_odd_pri
                    elif pri > next_odd.get_priority():
                        # new_node will point to the next node in the even list
                        new_node.set_next(next_even)
                        # curr_even will point to the next node in the odd list
                        curr_even.set_next(next_odd)
                        # curr_odd will point to the new node
                        curr_odd.set_next(new_node)
                        # tracker becomes None
                        tracker = None
                    # what happens if next_even_pri < pri <= next_odd_pri
                    elif (next_even.get_priority() < pri <=
                          next_odd.get_priority()):
                        # new_node will point to the node after next one in the
                        # odd list
                        new_node.set_next(next_odd.get_next())
                        # next_odd will point to next node in the even list
                        next_odd.set_next(next_even)
                        # the current even node will point to new_node
                        curr_even.set_next(new_node)
                        # tracker becomes None
                        tracker = None
                    # what happens if pri <= next_even_pri
                    elif pri <= next_even.get_priority():
                        # we move to the next node in each list
                        curr_odd = next_odd
                        curr_even = next_even
                        next_odd = next_odd.get_next()
                        next_even = next_even.get_next()

    def extracthigh(self):
        '''
        (WackyQueue) -> obj
        Removes and returns the first obj within WackyQueue providing
        WackyQueue is not empty
        REQ: WackyQueue not empty
        '''
        # find the node that is after the odd list head and store it
        new_node = self._odd_head.get_next()
        # point the head of the odd list to None
        self._odd_head.set_next(None)
        # get the item from the head of the odd list
        result = self._odd_head.get_item()
        # make the head of the even list the new head of the odd list
        self._odd_head = self._even_head
        # make the head of the even list the new node
        self._even_head = new_node
        # return the result
        return result

    def isempty(self):
        '''
        (WackyQueue) -> bool
        Returns a boolean that states whether the WackyQueue is empty
        '''
        return self._odd_head is None

    def changepriority(self, obj, pri):
        '''
        (WackyQueue, obj, int) -> NoneType
        Changes the first instance of obj in WackyQueue to have priority pri if
        the object is in WackyQueue. If the item is not in WackyQueue, nothing
        is changed about WackyQueue.
        '''
        # what happens if the odd and even head are none
        if self._odd_head is not None:
            # what happens if the even head is none
            if self._even_head is None:
                # check if the obj is the same as the odd head item
                if self._odd_head.get_item() == obj:
                    self._odd_head.set_priority(obj)
            else:
                # what happens otherwise, ie there is at least an item in heads
                # get the head item in each list
                head_item_odd = self._odd_head.get_item()
                head_item_even = self._even_head.get_item()
                # check equivalency between the heads and obj
                if head_item_odd == obj:
                    # we can use extract high to obtain first item in odd list
                    odd_head_item = self.extracthigh()
                    # insert same object with the new priority back into list
                    self.insert(odd_head_item, pri)
                elif head_item_even == obj:
                    # we need to remove the even head
                    new_even_head_node = self._odd_head.get_next()
                    # what will the odd head now point to
                    self._odd_head.set_next(self._even_head.get_next())
                    # set the new even head
                    self._even_head = new_even_head_node
                    # insert a node with obj and pri into the list
                    self.insert(obj, pri)
                else:
                    # create variable to track when we have found correct item
                    pri_changed = False
                    # we need to track each of the previous nodes
                    prev_node_odd = self._odd_head
                    prev_node_even = self._even_head
                    # what are the current nodes going to be
                    curr_node_odd = prev_node_odd.get_next()
                    curr_node_even = prev_node_even.get_next()
                    # loop through the lists until pri_changed is True
                    while not pri_changed:
                        # if the left is the same as obj what happens
                        if curr_node_odd.get_item() == obj:
                            # prev even node will now point to next odd node
                            prev_node_even.set_next(curr_node_odd.get_next())
                            # prev odd node will now point to curr even node
                            prev_node_odd.set_next(curr_node_even)
                            # insert node with obj and pri back into the list
                            self.insert(obj, pri)
                            # change pri_changed
                            pri_changed = True
                        # if the right is the same as obj what happens
                        elif curr_node_even.get_item() == obj:
                            # prev even will now point to next odd node
                            prev_node_even.set_next(curr_node_odd.get_next())
                            # curr odd node will now point to next even node
                            curr_node_odd.set_next(curr_node_even.get_next())
                            # insert node with obj and pri back into the list
                            self.insert(obj, pri)
                            # change pri_changed
                            pri_changed = True
                        # next odd node being None means we have reached end of
                        # the list
                        elif curr_node_odd.get_next() is None:
                            # we can stop the loop
                            pri_changed = True
                        # next node even being None means we have to check odd
                        # node before assuming that nothing in list matches obj
                        elif curr_node_even.get_next() is None:
                            # check for odd node equivalency
                            if curr_node_odd.get_next().get_item() == obj:
                                # we need to remove the odd node
                                curr_node_odd.set_next(None)
                                # insert a new node with obj and pri into list
                                self.insert(obj, pri)
                                # end the loop
                                pri_changed = True
                            # if they arent equivalent we can end the loop
                            else:
                                pri_changed = True
                        # if neither are the same as obj what happens
                        else:
                            # move to the next nodes in the lists
                            prev_node_odd = prev_node_odd.get_next()
                            prev_node_even = prev_node_even.get_next()
                            curr_node_odd = curr_node_odd.get_next()
                            curr_node_even = curr_node_even.get_next()

    def negateall(self):
        '''
        (WackyQueue) -> NoneType
        Every object within WackyQueue has its priority negated, which means
        that the order of the WackyQueue is entirely reversed
        '''
        # the following if statements deal with cases that will make the
        # following while loop fail almost instantly
        # after they have passed, the while loop will run smoothly
        # what happens if the lists are empty
        if self._odd_head is not None or self._even_head is not None:
            # what happens if just the even head is none
            if self._even_head is None:
                # get only the odd heads priority and negate it
                odd_head_pri = self._odd_head.get_priority()
                self._odd_head.set_priority(-odd_head_pri)
            # what happens if the next even and odd nodes are None
            elif (self._even_head.get_next() is None and
                  self._odd_head.get_next() is None):
                # get the two heads priorities and negate them
                odd_head_pri = self._odd_head.get_priority()
                even_head_pri = self._even_head.get_priority()
                self._odd_head.set_priority(-odd_head_pri)
                self._even_head.set_priority(-even_head_pri)
                # switch the heads because the priorities have changed
                new_odd_head = self._even_head
                new_even_head = self._odd_head
                self._even_head = new_even_head
                self._odd_head = new_odd_head
            # what happens if the next node in the even list is None
            elif self._even_head.get_next() is None:
                # get the head priorities and the next odd priority and negate
                # them
                odd_head_pri = self._odd_head.get_priority()
                even_head_pri = self._even_head.get_priority()
                odd_next_pri = self._odd_head.get_next().get_priority()
                self._odd_head.set_priority(-odd_head_pri)
                self._even_head.set_priority(-even_head_pri)
                self._odd_head.get_next().set_priority(-odd_next_pri)
                # fix the order, ie make the next odd the odd head, the even
                # head stays as such, and the old odd head becomes the next odd
                new_odd_head = self._odd_head.get_next()
                new_odd_head.set_next(self._odd_head)
                self._odd_head = new_odd_head
            else:
                # start at the heads of the lists
                # get the heads priorities and negate them
                # assign the heads to be the previous nodes
                odd_head_pri = self._odd_head.get_priority()
                self._odd_head.set_priority(-odd_head_pri)
                even_head_pri = self._even_head.get_priority()
                self._even_head.set_priority(-even_head_pri)
                prev_odd_node = self._odd_head
                prev_even_node = self._even_head
                # get the nodes after head
                # get their priorities and negate them
                # assign these to be the current nodes
                curr_odd_node = prev_odd_node.get_next()
                curr_even_node = prev_even_node.get_next()
                curr_odd_pri = curr_odd_node.get_priority()
                curr_even_pri = curr_even_node.get_priority()
                curr_odd_node.set_priority(-curr_odd_pri)
                curr_even_node.set_priority(-curr_even_pri)
                # get the next nodes after the current nodes
                # assign these to be the next nodes
                next_odd_node = curr_odd_node.get_next()
                next_even_node = curr_even_node.get_next()
                # while the next nodes are not None, we loop through the lists
                while ((next_odd_node is not None) and
                       (next_even_node is not None)):
                    # get the next nodes priorities and negate them
                    next_odd_pri = next_odd_node.get_priority()
                    next_even_pri = next_even_node.get_priority()
                    next_odd_node.set_priority(-next_odd_pri)
                    next_even_node.set_priority(-next_even_pri)
                    # let the current nodes point to the previous nodes
                    curr_odd_node.set_next(prev_odd_node)
                    curr_even_node.set_next(prev_even_node)
                    # get the next next odd nodes
                    next_next_odd_node = next_odd_node.get_next()
                    next_next_even_node = next_even_node.get_next()
                    # set the next nodes to point to the current nodes
                    next_odd_node.set_next(curr_odd_node)
                    next_even_node.set_next(curr_even_node)
                    # let the previous nodes be the current nodes
                    prev_odd_node = curr_odd_node
                    prev_even_node = curr_even_node
                    # let the current nodes be the next nodes
                    curr_odd_node = next_odd_node
                    curr_even_node = next_even_node
                    # let the next nodes be the next next nodes
                    next_odd_node = next_next_odd_node
                    next_even_node = next_next_even_node
                # if the next_odd_node is None it means each list has the same
                # number of elements and not only will the heads become the
                # back of the lists but they will swap lists
                if next_odd_node is None and next_even_node is None:
                    self._odd_head = curr_even_node
                    self._even_head = curr_odd_node
                # if the next_even_node is None, it means that the odd list had
                # more elements, and that its last element will be the odd head
                elif next_even_node is None:
                    # need to point the next odd node to the curr odd node
                    next_odd_node.set_next(curr_odd_node)
                    self._odd_head = next_odd_node
                    self._even_head = curr_even_node

    def getoddlist(self):
        '''
        (WackyQueue) -> WackyNode
        Returns a WackyNode that is the head of and points to the rest of the
        odd elements in a WackyQueue
        '''
        return self._odd_head

    def getevenlist(self):
        '''
        (WackyQueue) -> WackyNode
        Returns a WackyNode that is the head of and points to the rest of the
        even elements in a WackyQueue
        '''
        return self._even_head
