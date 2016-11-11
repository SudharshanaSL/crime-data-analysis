from sklearn.ensemble import RandomForestClassifier


def classify(trainData,trainTarget):
  model = RandomForestClassifier(n_estimators = 30, random_state = 84)
  model.fit(trainData, trainTarget)
  return model

