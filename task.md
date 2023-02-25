In the file https://radupintilie.dev.ascensys.ro/code_tests/testData.txt there are several records of the form "Ax,By,Cz". We want to display on an html page these records in a table with the possibility of filtering the values based on "select" type inputs. Initially, the page should have an output similar to the one from https://radupintilie.dev.ascensys.ro/code_tests/initial.html.

We want that when selecting a new value from the selections at the top of the page, its content will change according to the selection. Both the content of the other "select" elements and the content of the table will be modified.
Ex1: If we select "A1" in the first select, we will have records B1-B3 in the second select, C1-C6 in the third select and in the table lines 1 - 6 https://radupintilie.dev.ascensys.ro/code_tests/ select_A1.html
Ex2: If we select "B4" in the second select, the A2 record will be selected in the first select, in the third select only the C7 entry remains (the "All" element also disappears), and line 7 remains in the table https://radupintilie. dev.ascensys.ro/code_tests/select_B4.html
Ex3: If we select "C10" in the third select, A3 and B6 will be selected in the first 2 selects, and line 10 remains in the table https://radupintilie.dev.ascensys.ro/code_tests/select_C10.html

The above mechanism should work regardless of the selections made by the user (not just for the 3 cases above).

Ideally, we should read the data directly from the attached file (or from a file with a similar structure), but the solution where the information is stored directly in html is also ok.
