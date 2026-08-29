// 125. Valid Palindrome
#include<iostream>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        string new_s = "";
        for(int i=0; i<s.length(); i++){
            if((s[i] >= 'a' && s[i] <= 'z') ||  
                (s[i] >= '0' && s[i] <= '9')
            ) new_s += s[i];
            else if((s[i] >= 'A' && s[i] <= 'Z')){
                new_s += s[i] - 'A' + 'a';
            }
        }

        int left = 0, right = new_s.length() - 1;
        while(left < right){
            if(new_s[left] != new_s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
};