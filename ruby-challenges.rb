# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def bev_mo array, string
    array.select do |value|
        value.include?string
    end
end
p bev_mo beverages_array, letter_o
p bev_mo beverages_array, letter_t

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum  array
  array.sum()
end

p sum nums_array1
p sum nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
def initialize model, wheels, current_speed
   @model = model 
    @wheels = wheel
   @current_speed = current_speed
end 

def my_bike model, wheels, current_speed
   p  "The #{model} bike 2 #{wheels} wheels and is going #{current_speed} mph" 
end
def pedal_faster speed
    @current_speed += speed
end
def stop speed
@current_speed -= speed
if current_speed < 0
        end 
    end
end 


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


new_bike = Bike.new 'Trek', 2, 0
p new_bike
new_bike.my_bike 'Trek', 2, 0

p new_bike.pedal_faster 10
p new_bike.pedal_faster 18

p new_bike.stop 5

# I spent more than 2 hours in this and I could not get it to work, I get nil for brake. I tried to change the syntax of += and add and else statment equal to zero but I just get zero. I followed the exampled from the syllabus, challenges and the notes. 