#import libraries
import pandas as pd  
import numpy as np 
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics  import mean_absoulte
from sklearn.metrics  import
from sklearn.metrics  import


data= pd.read_csv("C:\Users\PRATHAM\pratham\book.csv")
print("dataset preveiw")
print(data.head())

x=data.drop("Risk_score",axis=1)
y=data["Risk_Score"]

X_train,X_Test,y_train,y_test =train_test_split(X,y,test_size=0.2,random_state=42)


model=LinearRegression()
model.fit(X_train,y_train)


y_pred = model.predict(X_Test)

print("\n Actual Values")
print(y_test.values)

print("\n predicted values")
print(y_pred)

MAE=mean_absolute_error(y_test,y_pred)
MSE=mean_squared_error(y_test,y_pred)
RMSE=np.sqrt(MSE)
R2=r2_score(y_test,y_pred)
MAPE=mean_absoulte_percentage_error(y_test,y_pred)
MEDAE=median_absoulte_error(y_test,y_pred)


print("\n regression evalution matrics")
print("\n mean absolute error(MAE)",MAE)
print("\n mean squared error(MSE)",MSE)
print("\n  root mean squared error(RMSE)",RMSE)
print("\n R2 Score:",R2)
print("\n mean absolute percentage error(MAPE)",MAPE)
print("\n medium absolute error(MEDAE)",MEDAE)
print("explained variance score:",EVS)
print("maximun error:",MA)