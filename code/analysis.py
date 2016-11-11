"""
timetagged.csv
ID,Date,Block,IUCR,Primary Type,Description,Location Description,
Arrest,Domestic,Beat,District,Ward,Community Area,FBI Code,
X Coordinate,Y Coordinate,Year,Updated On,Latitude,Longitude,Location
"""

from copy import deepcopy

def prepValuesAndCount():
    global crimeTypes, crimesInTime, totalCrimes, timeTypes
    for eachLine in lines:
        eachLine = eachLine.split(",")
        if eachLine[-1] in crimesInTime.keys():
            crimesInTime[eachLine[-1]] += 1
        else:
            crimesInTime[eachLine[-1]] = 1
        crimeTypes.add(eachLine[4])
        timeTypes.add(eachLine[-1])
        totalCrimes += 1
    crimeTypes = list(crimeTypes)
    timeTypes = list(timeTypes)
    print(crimeTypes)
    print("Total Crimes of ",len(crimeTypes)," types: ",totalCrimes)



def prepCrimesAtTime():
    global crimeTypes, countDict, crimesInTime, crimeDict
    for typeOfCrime in crimeTypes:
        crimeDict[typeOfCrime] = 0
    for timeOfDay in timeTypes:
        temp_count = crimesInTime[timeOfDay]
        crimesInTime[timeOfDay] = deepcopy(countDict)
        crimesInTime[timeOfDay]["count"] = temp_count
        crimesInTime[timeOfDay]["percentage"] = temp_count/(totalCrimes*0.01)
        for typeOfCrime in crimeTypes:
            crimesInTime[timeOfDay][typeOfCrime] = 0
    for eachLine in lines:
        eachLine = eachLine.split(",")
        timeOfDay = eachLine[-1]
        typeOfCrime = eachLine[4]
        crimesInTime[timeOfDay][typeOfCrime] += 1
        crimeDict[typeOfCrime] += 1
    for timeOfDay in timeTypes:
        for typeOfCrime in crimeTypes:
            crimesInTime[timeOfDay][typeOfCrime] = {
                "count": crimesInTime[timeOfDay][typeOfCrime],
                "percentage_wrt_time" : crimesInTime[timeOfDay][typeOfCrime]/(0.01*crimesInTime[timeOfDay]["count"])
            }



def prepTimesAtCrime():
    for typeOfCrime in crimeTypes:
        timeInCrimes[typeOfCrime] = deepcopy(countDict)
        for timeOfDay in timeTypes:
            timeInCrimes[typeOfCrime][timeOfDay] = {
                "count" : crimesInTime[timeOfDay][typeOfCrime],
                "percentage_wrt_crime" : crimesInTime[timeOfDay][typeOfCrime]["count"]/(0.01*crimeDict[typeOfCrime])
            }


def displayStats1():
    global crimesInTime, timeInCrimes
    for typeOfCrime in crimeTypes:
        print(typeOfCrime, crimeDict[typeOfCrime]/(0.01*totalCrimes))
    print("++++"*18)
    for typeOfCrime in crimeTypes:
        print(typeOfCrime)
        for timeOfDay in timeTypes:
            print([timeOfDay, timeInCrimes[typeOfCrime][timeOfDay]["percentage_wrt_crime"]],",")
        print("++++"*7)
    print("++++"*18)
    for timeOfDay in timeTypes:
        print(timeOfDay, crimesInTime[timeOfDay]["percentage"])
    print("++++"*7)
    for timeOfDay in timeTypes:
        print(timeOfDay)
        for typeOfCrime in crimeTypes:
            print([typeOfCrime,crimesInTime[timeOfDay][typeOfCrime]["percentage_wrt_time"]],",")
    print("++++"*18)


def getDayStats():
    global totalCrimes, dayTypeDict, dayOfWeekDict, crimeTypes, fd, lines, crimeDict, daysInCrime
    totalCrimes = 0
    fd = open("null_removed_day_tagged.csv","r")
    lines = fd.readlines()
    fd.close()
    lines = [ line.strip() for line in lines ]
    for typeOfCrime in crimeTypes:
        crimeDict[typeOfCrime] = deepcopy(countDict)
        daysInCrime[typeOfCrime] = deepcopy(dayOfWeekDict)
    for eachLine in lines:
        eachLine = eachLine.split(",")
        crimeDict[eachLine[4]]["count"] += 1
        dayOfWeekDict[eachLine[-2]]["count"] += 1
        dayTypeDict[eachLine[-1]]["count"] += 1
        totalCrimes += 1
        daysInCrime[eachLine[4]][eachLine[-2]]["count"] += 1
    print("Total Crimes are :",totalCrimes)
    # verisum = 0
    # verisum1 = 0
    # verisum2 = 0
    # verisum3 = 0
    # for typeOfCrime in crimeTypes:
    #     verisum += crimeDict[typeOfCrime]["count"]
    # print("Crimes:",verisum)
    # for day in dayOfWeekDict.keys():
    #     verisum1 += dayOfWeekDict[day]["count"]
    # print("Days:",verisum1)
    # print("Daytypes:",dayTypeDict["Weekend"]["count"]+dayTypeDict["Weekday"]["count"])
    for day in dayOfWeekDict.keys():
        dayOfWeekDict[day]["percentage"] = dayOfWeekDict[day]["count"]/(0.01*totalCrimes)
    for dayType in dayTypeDict.keys():
        dayTypeDict[dayType]["percentage"] = dayTypeDict[dayType]["count"]/(0.01*totalCrimes)
    for typeOfCrime in crimeTypes:
        crimeDict[typeOfCrime]["percentage"] = crimeDict[typeOfCrime]["count"]/(0.01*totalCrimes)
        for day in dayOfWeekDict.keys():
            daysInCrime[typeOfCrime][day]["percentage"] = daysInCrime[typeOfCrime][day]["count"]/(0.01*crimeDict[typeOfCrime]["count"])

def displayStats2():
    global daysInCrime, crimeTypes, dayTypeDict, dayOfWeekDict, crimeDict
    for typeOfCrime in crimeTypes:
        print("{ name:'"+typeOfCrime+"',y:"+str(crimeDict[typeOfCrime]["percentage"])+",drilldown:'"+typeOfCrime+"'},")
    print("++++"*18)
    for typeOfCrime in crimeTypes:
        print("{name:\""+typeOfCrime+"\",")
        print("id:\""+typeOfCrime+"\",")
        print("data:[")
        for day in dayOfWeekDict.keys():
            tempList = [day, daysInCrime[typeOfCrime][day]["percentage"] ]
            print(tempList,",")
        print("]},")
    print("++++"*18)
    for dayType in dayTypeDict.keys():
        print(dayType, dayTypeDict[dayType]["percentage"])
    print("++++"*18)
    print(list(dayOfWeekDict.keys()))
    for day in dayOfWeekDict.keys():
        print(dayOfWeekDict[day]["percentage"],end=",")
    print()
    print("++++"*18)

def outputAnalysis():
    global fd, lines, districtDict, domesticDict, testDayTypeDict, testTimeOfDayDict, trueFalseDict
    fd = open("output_predicted_decoded.csv","r")
    lines = fd.readlines()
    fd.close()
    totalTests = 0
    for eachLine in lines:
        eachLine = eachLine.strip()
        eachLine = eachLine.split(",")
        totalTests += 1
        if eachLine[0] in districtDict.keys():
            districtDict[eachLine[0]][eachLine[-1]] += 1
        else:
            districtDict[eachLine[0]] = deepcopy(trueFalseDict)
        if eachLine[3] in domesticDict.keys():
            domesticDict[eachLine[3]][eachLine[-1]] += 1
        else:
            domesticDict[eachLine[3]] = deepcopy(trueFalseDict)
        if eachLine[1] in testDayTypeDict.keys():
            testDayTypeDict[eachLine[1]][eachLine[-1]] += 1
        else:
            testDayTypeDict[eachLine[1]] = deepcopy(trueFalseDict)
        if eachLine[2] in testTimeOfDayDict.keys():
            testTimeOfDayDict[eachLine[2]][eachLine[-1]] += 1
        else:
            testTimeOfDayDict[eachLine[2]] = deepcopy(trueFalseDict)
    districts = list(districtDict.keys())
    print(districts)
    for district in districts:
        crimesum = districtDict[district]["true"] + districtDict[district]["false"]
        percent = (crimesum/(0.01*totalTests))
        districtDict[district]["true"] /= (0.01*totalTests)
        districtDict[district]["false"]/= (0.01*totalTests)
        print("\
                {\
                    y:",percent,",\
                    drilldown:{\
                        name:'Arrest Chances - ",district,"',\
                        data:[\
                            ['true', ",districtDict[district]["true"],"] ,\
                            ['false',",districtDict[district]["false"],"]\
                        ]\
                    }\
                }, ")
    print("++++"*18)
    print("Domestic")
    for key in domesticDict.keys():
        crimesum = domesticDict[key]["true"] + domesticDict[key]["false"]
        percent = (crimesum/(0.01*totalTests))
        print(percent)
        domesticDict[key]["true"] /= (0.01*totalTests)
        domesticDict[key]["false"]/= (0.01*totalTests)
        print(key,[domesticDict[key]["true"],domesticDict[key]["false"]])
    print("++++"*18)
    print("Time of Day")
    for key in testTimeOfDayDict.keys():
        crimesum = testTimeOfDayDict[key]["true"] + testTimeOfDayDict[key]["false"]
        percent = (crimesum/(0.01*totalTests))
        print(percent)
        testTimeOfDayDict[key]["true"] /= (0.01*totalTests)
        testTimeOfDayDict[key]["false"]/= (0.01*totalTests)
        print(key,[testTimeOfDayDict[key]["true"],testTimeOfDayDict[key]["false"]])
    print("++++"*18)
    print("Day Type")
    for key in testDayTypeDict:
        crimesum = testDayTypeDict[key]["true"] + testDayTypeDict[key]["false"]
        percent = (crimesum/(0.01*totalTests))
        print(percent)
        testDayTypeDict[key]["true"] /= (0.01*totalTests)
        testDayTypeDict[key]["false"]/= (0.01*totalTests)
        print(key,[testDayTypeDict[key]["true"],testDayTypeDict[key]["false"]])
    print("++++"*18)



fd = open("timetagged.csv","r")
lines = fd.readlines()
fd.close()
lines = [ i.strip() for i in lines ]

crimesInTime = dict()
crimeTypes = set()
countDict = {
    "count" : 0,
    "percentage" : 0
}
crimeDict = dict()
totalCrimes = 0
timeInCrimes = dict()
timeTypes = set()

dayOfWeekDict = {
    "Monday" : deepcopy(countDict),
    "Tuesday": deepcopy(countDict),
    "Wednesday": deepcopy(countDict),
    "Thursday" : deepcopy(countDict),
    "Friday"   : deepcopy(countDict),
    "Saturday" : deepcopy(countDict),
    "Sunday"   : deepcopy(countDict)
}
dayTypeDict = {
    "Weekend" : deepcopy(countDict),
    "Weekday" : deepcopy(countDict)
}
daysInCrime = dict()


trueFalseDict = {
    "true":0,
    "false":0
}

districtDict = dict()
domesticDict = dict()
testTimeOfDayDict = dict()
testDayTypeDict = dict()






# prepValuesAndCount()
# prepCrimesAtTime()
# prepTimesAtCrime()
# getDayStats()


#displayStats1()
print("++++++++++++++++++++++++++++++++++++++++"*37)
# displayStats2()
outputAnalysis()