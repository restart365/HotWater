function [ t ] = test(sudoku )
%TEST Summary of this function goes here
%   Detailed explanation goes here
set(0,'RecursionLimit',100000000000);
t = 1;
    for x = 1:9
        for y = 1:9
             t = t*(sum(sudoku(x,y,:)) ~= 0);
        end
    end
end


