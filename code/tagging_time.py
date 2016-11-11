from datetime import datetime
import csv
import time

def tag_time():
    inputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/crime_modified.csv'
    outputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output.csv'
    count = 0

    with open(inputfile,'r') as csvinput:
        with open(outputfile, 'w') as csvoutput:
            writer = csv.writer(csvoutput, lineterminator='\n')
            for row in csv.reader(csvinput):
                if count >= 1:
                    date_time = row[1]
                    data_time = date_time.split()
                    time = data_time[1]+' '+data_time[2]
                    in_time = datetime.strptime(time, "%I:%M:%S %p")
                    out_time = datetime.strftime(in_time, "%H:%M")
                    hour = out_time.split(':')[0]
                    hour = int(hour)
                    # print hour
                    if hour >= 6 and hour < 12:
                        row.append('Morning')
                        writer.writerow(row)
                        # print 'Morning'
                    elif hour >=12 and hour < 18:
                        row.append('Afternoon')
                        writer.writerow(row)
                        # print 'Afternoon'
                    elif hour >=18 and hour < 21:
                        row.append('Evening')
                        writer.writerow(row)
                        # print 'Evening'
                    else:
                        row.append('Night')
                        writer.writerow(row)
                        # print 'Night'
                count+=1
    print 'Time Tagged data',count

def tag_date():
    inputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output.csv'
    outputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_time_tagged.csv'
    count = 0
    with open(inputfile,'r') as csvinput:
        with open(outputfile, 'w') as csvoutput:
            writer = csv.writer(csvoutput, lineterminator='\n')
            for row in csv.reader(csvinput):
                date = row[1].split()[0]
                day = time.strftime("%A", time.strptime(date, "%m/%d/%Y"))
                row.append(day)
                writer.writerow(row)
                count+=1
    print 'Date Tagged Data', count


def clean_data():
    inputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_fully_tagged.csv'
    outputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_cleaned.csv'
    count = 0
    with open(inputfile,'r') as csvinput:
        with open(outputfile, 'w') as csvoutput:
            writer = csv.writer(csvoutput, lineterminator='\n')
            for row in csv.reader(csvinput):
                    if '' not in row:
                        writer.writerow(row)
                        count+=1
    print 'Cleaned Data count',count

def tag_weekday_weekend():
    inputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_time_tagged.csv'
    outputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_fully_tagged.csv'
    count = 0
    with open(inputfile,'r') as csvinput:
        with open(outputfile, 'w') as csvoutput:
            writer = csv.writer(csvoutput, lineterminator='\n')
            for row in csv.reader(csvinput):
                    if row[-1] in ['Saturday', 'Sunday']:
                        row.append('Weekend')
                    else:
                        row.append('Weekday')
                    writer.writerow(row)
                    count+=1
    print 'Weekend/Weekday Tagged data',count


def select_attributes_for_rf():
    inputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_fully_tagged.csv'
    outputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_for_rf.csv'
    count = 0
    with open(inputfile,'r') as csvinput:
        with open(outputfile, 'w') as csvoutput:
            writer = csv.writer(csvoutput, lineterminator='\n')
            for row in csv.reader(csvinput):
                    op = []
                    op.append(row[10])
                    op.append(row[-1])
                    op.append(row[-3])
                    op.append(row[7]) # arrest
                    op.append(row[8]) #domestic
                    writer.writerow(op)
                    count+=1
    print 'Attributes selected for RF',count


#Gives how many domestic crimes
def num_domestic():
    inputfile = '/home/pramod/Documents/Crime_Data_Analysis/data/output_for_rf.csv'
    count = 0
    with open(inputfile,'r') as csvinput:
        for row in csv.reader(csvinput):
            if row[-2] == 'true':
                count+=1
    print 'Domestic crimes count', count

# tag_time()
# tag_date()
# clean_data()
# tag_weekday_weekend()
select_attributes_for_rf()
# num_domestic()
