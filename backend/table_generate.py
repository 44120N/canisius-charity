id = 'D'
start = 1
end = 100

isVVIP = "false"
VVIP = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(start, end+1):
    if i in VVIP: isVVIP = "true"
    else: isVVIP = "false"
    print(f"(\'{id+str(i)}\', true, false, {isVVIP}, NULL),")