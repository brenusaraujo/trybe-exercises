"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentEnrolled = /** @class */ (function () {
    function studentEnrolled(e, n, eg1, eg2, eg3, eg4) {
        this.enrollment = e;
        this.name = n;
        this.examGrade1 = eg1;
        this.examGrade2 = eg2;
        this.examGrade3 = eg3;
        this.examGrade4 = eg4;
    }
    Object.defineProperty(studentEnrolled.prototype, "firstGrade", {
        get: function () {
            return this.examGrade1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(studentEnrolled.prototype, "secondGrade", {
        get: function () {
            return this.examGrade2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(studentEnrolled.prototype, "thirdGrade", {
        get: function () {
            return this.examGrade3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(studentEnrolled.prototype, "fourthGrade", {
        get: function () {
            return this.examGrade4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(studentEnrolled.prototype, "getEnrollment", {
        get: function () {
            return this.enrollment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(studentEnrolled.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(studentEnrolled.prototype, "sumAllGrades", {
        get: function () {
            return (this.examGrade1 + this.examGrade2 + this.examGrade3 + this.examGrade4);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(studentEnrolled.prototype, "average", {
        get: function () {
            var sumAllGrades = this.sumAllGrades;
            return sumAllGrades / 4;
        },
        enumerable: false,
        configurable: true
    });
    return studentEnrolled;
}());
exports.default = studentEnrolled;
