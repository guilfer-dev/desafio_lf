
import random
import time


def main():
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    try:
        number_of_lines = int(input(
            'Please, enter the number of keys to be generated:\n'))
        t1 = time.time()
        with open('result_python.txt', 'w') as file:
            for i in range(number_of_lines):
                key = set()
                while(len(key) < 7):
                    key.add(random.choice(charset))
                file.write(''.join(key) + '\n')
        t2 = time.time()
        print("Generation time: ", (t2 - t1) * 1000, "ms")
        print("Keys generated successfully!")
        exit()

    except ValueError:
        print("Please, enter a valid number")
        exit()


if __name__ == '__main__':
    main()
