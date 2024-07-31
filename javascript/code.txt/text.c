#include <iostream>
    #include <cmath>
    
    class Area {
    public:
        double length, breadth, radius, side, base, height;
    
        // Constructor overloading
       
        Area() {}
    
        // Constructor for rectangle
        Area(double l, double b) {
            length = l;
            breadth = b;
        }
    
        // Constructor for square
        Area(double s) {
            side = s;
        }
    
        // Constructor for circle
        Area(double r, bool isCircle) {
            radius = r;
        }
    
        // Constructor for triangle
        Area(double b, double h, bool isTriangle) {
            base = b;
            height = h;
        }
    
        // Method overloading
        double area(double r) {
            return M_PI * r * r;
        }
    
        double area(double s, bool isSquare) {
            return s * s;
        }
    
        double area(double l, double b) {
            return l * b;
        }
    
        double area(double b, double h, bool isTriangle, bool isTriangleMethod) {
            return 0.5 * b * h;
        }
    };
    
    int main() {
        Area rectangle(5, 10);
        Area square(4);
        Area circle(3, true);
        Area triangle(6, 8, true);
    
        std::cout << "Area of Rectangle: " << rectangle.area(5, 10) << std::endl;
        std::cout << "Area of Square: " << square.area(4, true) << std::endl;
        std::cout << "Area of Circle: " << circle.area(3) << std::endl;
        std::cout << "Area of Triangle: " << triangle.area(6, 8, true, true) << std::endl;
    
        return 0;
    }