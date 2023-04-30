export const OuterGridFields = [
  {
    title: "id",
    label: "id",
    isHidden: true,
  },
  {
    title: "studentName",
    label: "نام",
    isHidden: false,
  },
  {
    title: "studentFamily",
    label: "نام خانوادگی",
    isHidden: false,
  },
  {
    title: "studentGrade",
    label: "مقطع تحصیلی",
    isHidden: false,
  },
  {
    title: "studentAge",
    label: "سن",
    isHidden: false,
  },
  {
    title: "studentNationalCode",
    label: "کد ملی",
    isHidden: false,
  },
  {
    title: "actions",
    label: "عملیات",
    filterable: false,
    isHidden: false,
  },
];

export const OutterGridRows = [
  {
    id: 1,
    studentName: "احمد",
    studentFamily: "جباری",
    studentGrade: "دوم دبیرستان",
    studentAge: "15",
    studentNationalCode: "۰۰۱۸۷۲۴۷۲۳",
    actions: ["view"],
  },
  {
    id: 2,
    studentName: "رضا",
    studentFamily: "اسدی",
    studentGrade: "دوم دبیرستان",
    studentAge: "15",
    studentNationalCode: "۰۰۲۵۴۷۸۷۵۳",
    actions: ["view"],
  },
  {
    id: 3,
    studentName: "سینا",
    studentFamily: "منصوری",
    studentGrade: "سوم دبیرستان",
    studentAge: "16",
    studentNationalCode: "۰۰۶۲۳۱۴۷۸۶",
    actions: ["view"],
  },
  {
    id: 4,
    studentName: "محمد",
    studentFamily: "کشوری",
    studentGrade: "اول دبیرستان",
    studentAge: "14",
    studentNationalCode: "2764567212",
    actions: [""],
  },
];

export const InnerGridFields = [
  {
    title: "id",
    label: "id",
    isHidden: true,
  },
  {
    title: "courseName",
    label: "نام درس",
    isHidden: false,
  },
  {
    title: "teacherName",
    label: "نام استاد",
    isHidden: false,
  },
  {
    title: "grade",
    label: "نمره",
    isHidden: false,
  },
];

export const InnerGridRowData = [
  {
    studentId: 1,
    gradesData: [
      {
        id: 1,
        courseName: "فیزیک",
        teacherName: "استاد نصیری",
        grade: 18.5,
      },
      {
        id: 2,
        courseName: "ریاضی",
        teacherName: "استاد اعلمی",
        grade: 19,
      },
      {
        id: 3,
        courseName: "شیمی",
        teacherName: "استاد اعرابی",
        grade: 16,
      },
      {
        id: 4,
        courseName: "دین و زندگی",
        teacherName: "استاد کمالی",
        grade: 17,
      },
      {
        id: 5,
        courseName: "هندسه ۲",
        teacherName: "استاد مرتضوی",
        grade: 18,
      },
    ],
  },
  {
    studentId: 2,
    gradesData: [
        {
            id: 6,
            courseName: "فیزیک",
            teacherName: "استاد نصیری",
            grade: 18,
          },
          {
            id: 7,
            courseName: "ریاضی",
            teacherName: "استاد اعلمی",
            grade: 19.25,
          },
          {
            id: 8,
            courseName: "شیمی",
            teacherName: "استاد اعرابی",
            grade: 19,
          },
          {
            id: 9,
            courseName: "دین و زندگی",
            teacherName: "استاد کمالی",
            grade: 17,
          },
          {
            id: 10,
            courseName: "هندسه ۲",
            teacherName: "استاد مرتضوی",
            grade: 18.25,
          },
    ],
  },
  {
    studentId: 3,
    gradesData: [
        {
            id: 1,
            courseName: "فیزیک",
            teacherName: "استاد نصیری",
            grade: 14.5,
          },
          {
            id: 2,
            courseName: "حسابان",
            teacherName: "استاد مهدوی",
            grade: 16,
          },
          {
            id: 3,
            courseName: "شیمی",
            teacherName: "استاد اعرابی",
            grade: 15,
          },
          {
            id: 4,
            courseName: "دین و زندگی",
            teacherName: "استاد کمالی",
            grade: 20,
          },
          {
            id: 5,
            courseName: "تاریخ",
            teacherName: "استاد ایراندوست",
            grade: 19.5,
          },
    ],
  },
];
