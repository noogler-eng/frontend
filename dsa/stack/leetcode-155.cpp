// 155. Min Stack
#include<iostream>
using namespace std;

class MinStack {
public:
    stack<pair<int, int>> st;
    int mini = INT_MAX;
    MinStack() {}
    
    void push(int value) {
        if(st.empty()){
            mini = min(mini, value);
        }else{
            int stackMini = st.top().second;
            mini = min(stackMini, value);
        }
        st.push({value, mini});
    }
    
    void pop() {
        if(st.empty()) {
            mini = INT_MAX;
        }else{
            st.pop();
            if(st.empty()) mini = INT_MAX;
            else mini = st.top().second;
        }
        return;
    }
    
    int top() {
        if(st.empty()) return -1;
        return st.top().first;
    }
    
    int getMin() {
        if(st.empty()) return -1;
        return st.top().second;
    }
};
