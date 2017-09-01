#1. Print 1-255
def printTo255():
	num = 1
	while num<=255:
		print num
		num +=1

#2. Print 0-255 with sum
def printToSum():
	num = 0
	total = 0
	while num<=255:
		print "Number:{} Sum:{}".format(num, total)
		num +=1
		total += num

#3. Print odds 1-255
def printOdds():
	for i in range (0, 257):
		if i%2 == 1:
			print i

#4. Iterate through array.
def iterate(arr):
	for val in arr:
		print val

#5. Find max in array.
def findMax(arr):
	return max(arr)

#6. Given an array of intergers find average.
def findAvg(arr):
	sum = 0
	for val in arr:
		sum += val
	return sum/len(arr)

#7. Create an array with odd integers between 1 and given number.
def oddArray(n):
	arr = []
	for i in range(1, n+1):
		if i%2==1:
			arr.append(i)
	return arr

#8. Square each value in a given array.
def squareArray(arr):
	for i in range (0, len(arr)):
		arr[i] = arr[i]*arr[i]
	return arr

#9. Given an array and a value y, count and print the number of values greater than y.
def greaterThanY(arr, y):
	count = 0
	for val in arr:
		if val > y:
			count +=1
			print val
	print "Total number of values greater than {}: {}".format(y, count)

#10. Return a given array after setting negative values to zero.
def noNegs(arr):
	for i in range(0, len(arr)):
		if arr[i] < 0:
			arr[i]=0
	return arr

#11. Given an array return the max, min, average.
def maxMinAvg(arr):
	sum = 0
	for val in arr:
		sum += val
	avg = sum/len(arr)
	return "Max:{} Min:{} Avg:{}".format(max(arr), min(arr), avg)

#12. Given an array move all values forward by one, dropping the first and leaving a 0.
def shiftArr(arr):
	for i in range(0, len(arr)-1):
		arr[i] = arr[i+1]
	arr[len(arr)-1]=0
	return arr

#13. Replace any negative numbers in array with string 'hello'.
def swapString(arr):
	for i in range(0, len(arr)):
		if arr[i] < 0:
			arr[i]='hello'
	return arr

print (swapString([1, 4, -5]))