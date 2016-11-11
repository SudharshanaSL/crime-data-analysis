def data_strip():
    inputfile = '/home/sudharshanasl/Semesters/7th/DMDW/lab proj/crime.csv'
    outputfile = '/home/sudharshanasl/Semesters/7th/DMDW/lab proj/crime_modified.csv'

    count = 0
    f2 = open(outputfile,'w')
    with open(inputfile, 'r') as f:
        for line in f:
            if count == 100000:
                f2.close()
                exit()
            f2.write(line)
            count+=1
data_strip()