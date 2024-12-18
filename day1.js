// Ques- Container With Most Water
var maxArea = function(height) {
    // height= height
    let n= height.length
    let max=0;
    let right= n-1;
    let left= 0;
    while(right>left){
        let len = height[left];
        if(height[left]>height[right]) {
            len= height[right]
        }
        let width= right-left;
        let area = len * width;
        if (area > max) {
            max= area;
        }
        
        if(height[left] > height[right]){
            right=right-1
        }
        else{
            left=left+1
        }
    }
    return max;
};
