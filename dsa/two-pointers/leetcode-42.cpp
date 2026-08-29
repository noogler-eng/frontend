// 42. Trapping Rain Water
#include<iostream>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        vector<int> maxiLeft(n, 0);
        vector<int> maxiRight(n, 0);

        int leftMax = 0;
        for(int i=0; i<n; i++){
            maxiLeft[i] = leftMax;
            leftMax = max(leftMax, height[i]);
        }

        int rightMax = 0;
        for(int i=n-1; i>=0; i--){
            maxiRight[i] = rightMax;
            rightMax = max(rightMax, height[i]);
        }

        int totalWater = 0;
        for(int i=0; i<n; i++){
            int nearbyHeight = min(maxiLeft[i], maxiRight[i]);
            if(height[i] < nearbyHeight){
                totalWater += 1 * min(maxiLeft[i], maxiRight[i]) - height[i];
            }
        }

        return totalWater;
    }
};