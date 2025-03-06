class Solution {
public:
    typedef vector<int>vi;
    typedef vector<vi>vii;
    int h=0;
    int w=0;
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        h=grid.size();
        w=grid[0].size();
        vi cnt(h*w+1,0);
        for(int i=0;i<h;i++){
            for(int j=0;j<w;j++){
                cnt[grid[i][j]]++;;
            }
        }
        vi answer(2);
        for(int i=1;i<cnt.size();i++){
            if(cnt[i]==0){
                answer[1]=i;
            }
            if(cnt[i]==2){
                answer[0]=i;
            }
        }
        return answer;
    }
};