clc;
clear;
close all;

global sudoku3D
sudoku3D = zeros(9,9,9);
global cir;
cir = 1;
global j;
j = ones(1,20);
global i;
i = ones(1,20);
global possi
possi = cell(20,9);
sudoku2D = input('input your sudoku ');

for x = 1:9
    for y = 1:9
        if sudoku2D(x,y) == 0
            sudoku3D(x,y,:) = 1;
        else
            sudoku3D(x,y,sudoku2D(x,y))=1; 
        end
    end
end

sudoku3D = red(sudoku3D);
if sum(sum(sum(sudoku3D))) ~= 81
    tryall(sudoku3D);
    testall;
end

for x = 1:9
    for y = 1:9
        sudoku2D(x,y) = find(sudoku3D(x,y,:) == 1);
    end
end

disp(sudoku2D)