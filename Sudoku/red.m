function [ sudoku ] = red( sudoku)
%SUDOKU_REDUCE Summary of this function goes here
%   Detailed explanation goes here

sum_new = sum(sum(sum(sudoku)));
sum_old = 0;
while sum_old ~= sum_new
    sum_old = sum_new;
    for x = 1:9
        for y = 1:9
            if sum(sudoku(x,y,:)) == 1
                k = find(sudoku(x,y,:) == 1);
                sudoku(x,:,k) = 0;
                sudoku(:,y,k) = 0;
                sudoku((3*ceil(x/3)-2):(3*ceil(x/3)),(3*ceil(y/3)-2):(3*ceil(y/3)),k) = 0;
                sudoku(x,y,k) = 1;
            end
        end
    end
    sum_new = sum(sum(sum(sudoku)));
end

