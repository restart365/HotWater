function [ ] = tryall(sudoku )
%BREAK Summary of this function goes here
%   Detailed explanation goes here
global cir
global j
global possi

    for x = 1:9
        for y = 1:9
            n = 0;
            if sum(sudoku(x,y,:)) > 1
                j(cir) = sum(sudoku(x,y,:));
                k = find(sudoku(x,y,:));
                for i = 1:j(cir)
                    sudoku_s = sudoku;
                    sudoku_s(x,y,:) = zeros(1,1,9);
                    sudoku_s(x,y,k(i)) = 1;
                    possi{cir,i} = red(sudoku_s);
                end
                n = 1;
                break
            end
        end
        if n == 1
            break
        end
    end
    
end