// 11. Container With Most Water
#include<iostream>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int maxi = 0;
        while(left < right){
            int currentWaterHold = (right - left) * min(height[left], height[right]);
            maxi = max(maxi, currentWaterHold);

            if(height[left] <= height[right]){
                left++;
            }else{
                right--;
            }
        }
        return maxi;
    }   
};