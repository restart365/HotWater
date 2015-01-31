function [ ] = testall( )
%TESTALL Summary of this function goes here
%   Detailed explanation goes here
global cir;
global j;
global i;
global possi
global sudoku3D

    if test(possi{cir,i(cir)}) == 1
        if sum(sum(sum(possi{cir,i(cir)}))) == 81
            sudoku3D = possi{cir,i(cir)};
        else
            cir = cir + 1;
            tryall(possi{cir-1,i(cir-1)});
            testall;
        end
    else
        for k = cir:-1:1
            if i(k) >= j(k)
                i(k) = 1;
                continue
            else
                i(k) = i(k) + 1;
                cir = k;
                break;
            end
        end
        testall;
    end
end

