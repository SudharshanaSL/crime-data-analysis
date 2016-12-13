__author__ = 'sudharshanasl'

from sklearn.preprocessing import LabelEncoder
from sklearn.cross_validation import train_test_split
from sklearn.metrics import classification_report
import numpy as np
import argparse
import glob
import scipy
import traceback
import sys
from numpy import savetxt
import rf_classify
import csv
from sklearn import preprocessing

inputfile = '/home/sudharshanasl/Semesters/7th/DMDW/lab proj/output_for_rf.csv'

time_of_day = {'Morning':0, 'Afternoon':1, 'Evening':2, 'Night':3}
type_of_day_encoding = {'Weekday':0, 'Weekend':1}
domestic_encoding = {'false':0, 'true':1}


def predict_arrest():
    global day_encoding, type_of_day_encoding, output_encoding
    attributes = []
    target = []
    attribute_length = 3
    with open(inputfile) as csvinput:
        for line in csv.reader(csvinput):
            temp = []
            temp.append(line[0])
            temp.append(type_of_day_encoding[line[1]])
            temp.append(time_of_day[line[2]])
            temp.append(domestic_encoding[line[4]])
            attributes.append(temp)
            target.append(line[3])
    inp_matrix = scipy.asarray(attributes)
    targetNames = np.unique(target)
    (trainData, testData, trainTarget, testTarget) = train_test_split(inp_matrix, target,test_size = 0.3, random_state = 555555)

    model = rf_classify.classify(trainData,trainTarget)
    #file_dump = dump.dump_model(model,'crime_data_analysis')

    print classification_report(testTarget, model.predict(testData),target_names = targetNames)


    # predicted_file = '/home/sudharshanasl/Semesters/7th/DMDW/lab proj/output_predicted.csv'
    # with open(predicted_file, 'w') as csvoutput:
    #     writer = csv.writer(csvoutput, lineterminator='\n')
    #     for row,op in zip(testData,testTarget):
    #         predicted_op = model.predict(row)
    #         row = list(row)
    #         row.append(op)
    #         row.append(predicted_op[0])
    #         writer.writerow(row)

# predict_domestic()
predict_arrest()