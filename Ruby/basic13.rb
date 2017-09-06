#1. Print 1-n
def printInt(n)
	1.upto(n) { |i| puts i}
end

#2. Print odd numbers between 1-255.
def oddNum
	0.upto(255) { |i| puts i unless i.even? }
end


#3. Print sum of all numbers 1-255.
def findSum
	sum = 0
	1.upto(255) { |i| puts sum += i}
end

# findSum
# 4. Iterating through an array and print each value.
def iterate(arr)
	for i in 0...arr.length
		puts arr[i]
	end
end

# 5.Find Max
def findMax(arr)
	puts arr.max
end
# findMax([-2, -5, -6, -8, -10])

#6. Get Average
def getAverage(arr)
	sum = 0
	arr.each { |i| sum += i }
	puts "The average is #{sum/arr.length}"
end
# getAverage([2, 10, 3])
#returns 5

#7. Create an array with only odd numbers 1-255
def createArr
	y = (1..255).to_a.reject {|elem| elem.even? }
	puts y
end
# createArr()

# 8. Greater than y
def greaterThanY(arr, val)
	count = 0
	for i in 0...arr.length
		if arr[i] > val
			count +=1
		end
	end
	puts count
end
# greaterThanY([1, 4, 6, 8, 9], 0)

# 9. Square the values
def squareValues (arr)
	puts arr.map {|i| i**2}
end
squareValues([1, 2, 3, 4])

#10.  Eliminate Negative Numbers--replace with 0.
def noNegs(arr)
	puts arr
	for i in 0...arr.length
		if arr[i] < 0
			arr[i] = 0
		end
	end
	puts arr
end
# noNegs([1, 5, -7, -10, 1])

#11. Max, Min and Average
def maxMinAvg(arr)
	sum = 0
	for i in 0...arr.length
		sum = sum + arr[i]
	end
	puts sum
	puts "The average is #{sum/arr.length}"
	puts "The min is #{arr.min}"
	puts "The max is #{arr.max}"
end
# maxMinAvg([6, 4])

#12. Shifting
def shiftArr(arr)
	print arr
	arr.shift
	arr.push(0)
	print arr
end
# shiftArr([3, 1, 7, 9, 10])

#13. Number to String
def numtoString(arr)
	puts arr
	for i in 0...arr.length
		if arr[i] < 0
			arr[i] = "Dojo"
		end
	end
	puts arr
end
# numtoString([1, 5, -7, -10, 1])