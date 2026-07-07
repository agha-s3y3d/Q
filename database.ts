import * as SQLite from 'expo-sqlite';

const dbPromise = SQLite.openDatabaseAsync('school.db');
type Student = {
  id: number;
  name: string;
  age: number;
  phone: string;
  gender: "پسر" | "دختر";
  loc: "اتابک" | "محبین";
};

const defaultStudents: Student[] = [
  {
    id: 1,
    name: "سید علی حسینی",
    age: 14,
    phone: "+98 9946600262",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 2,
    name: "سید آرزو نجفی",
    age: 15,
    phone: "+98 9778453697",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 3,
    name: "علی صادقی",
    age: 11,
    phone: "+98 9415388614",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 4,
    name: "راضیه حسینی",
    age: 12,
    phone: "+98 9356719671",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 5,
    name: "سید حمید محمدی",
    age: 15,
    phone: "+98 9101484169",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 6,
    name: "مینا رضایی",
    age: 15,
    phone: "+98 9334196542",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 7,
    name: "سید ناصر کاظمی",
    age: 15,
    phone: "+98 9661973203",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 8,
    name: "سید مریم صادقی",
    age: 14,
    phone: "+98 9641332263",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 9,
    name: "سید احمد رضایی",
    age: 11,
    phone: "+98 9308845872",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 10,
    name: "سید سکینه احمدی",
    age: 14,
    phone: "+98 9447738585",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 11,
    name: "علی رضایی",
    age: 15,
    phone: "+98 9967581719",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 12,
    name: "سید لیلا کرمی",
    age: 14,
    phone: "+98 9226702978",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 13,
    name: "رضا میرزایی",
    age: 13,
    phone: "+98 9406963715",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 14,
    name: "سید نازنین طباطبایی",
    age: 13,
    phone: "+98 9239139336",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 15,
    name: "سید ناصر کاظمی",
    age: 15,
    phone: "+98 9789371837",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 16,
    name: "مینا رضایی",
    age: 11,
    phone: "+98 9764650912",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 17,
    name: "سید حسین احمدی",
    age: 15,
    phone: "+98 9479544198",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 18,
    name: "سید سارا جعفری",
    age: 14,
    phone: "+98 9871835223",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 19,
    name: "سید مهدی نجفی",
    age: 12,
    phone: "+98 9569269978",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 20,
    name: "سید زینب موسوی",
    age: 15,
    phone: "+98 9123456780",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 21,
    name: "امیر حسینی",
    age: 13,
    phone: "+98 9312345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 22,
    name: "فاطمه رضایی",
    age: 12,
    phone: "+98 9412345678",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 23,
    name: "حسن محمدی",
    age: 14,
    phone: "+98 9512345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 24,
    name: "زهرا احمدی",
    age: 11,
    phone: "+98 9612345678",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 25,
    name: "سید محمد جعفری",
    age: 15,
    phone: "+98 9712345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 26,
    name: "نرگس میرزایی",
    age: 13,
    phone: "+98 9812345678",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 27,
    name: "کاظم رضایی",
    age: 12,
    phone: "+98 9912345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 28,
    name: "مهناز کاظمی",
    age: 14,
    phone: "+98 9123456790",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 29,
    name: "رحیم نوری",
    age: 15,
    phone: "+98 9223456790",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 30,
    name: "عاطفه صادقی",
    age: 11,
    phone: "+98 9323456790",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 31,
    name: "مجید حسینی",
    age: 13,
    phone: "+98 9534515109",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 32,
    name: "مینا حسینی",
    age: 14,
    phone: "+98 9426262280",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 33,
    name: "سید امیر جعفری",
    age: 13,
    phone: "+98 9401894208",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 34,
    name: "سید زینب میرزایی",
    age: 11,
    phone: "+98 9318585258",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 35,
    name: "سید حسن میرزایی",
    age: 15,
    phone: "+98 9282906419",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 36,
    name: "زهرا حسینی",
    age: 12,
    phone: "+98 9856205117",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 37,
    name: "محمد رضایی",
    age: 14,
    phone: "+98 9113573072",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 38,
    name: "سید سکینه میرزایی",
    age: 12,
    phone: "+98 9513316746",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 39,
    name: "سید کاظم نوری",
    age: 12,
    phone: "+98 9697795831",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 40,
    name: "سید زهرا جعفری",
    age: 11,
    phone: "+98 9748993236",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 41,
    name: "حسن حسینی",
    age: 14,
    phone: "+98 9827104098",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 42,
    name: "سید عاطفه میرزایی",
    age: 14,
    phone: "+98 9973572631",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 43,
    name: "سید رضا کاظمی",
    age: 13,
    phone: "+98 9942233996",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 44,
    name: "آرزو محمدی",
    age: 11,
    phone: "+98 9127499714",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 45,
    name: "امیر محمدی",
    age: 11,
    phone: "+98 9554319691",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 46,
    name: "زهرا کاظمی",
    age: 14,
    phone: "+98 9974832777",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 47,
    name: "سید ناصر احمدی",
    age: 11,
    phone: "+98 9473711722",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 48,
    name: "لیلا نجفی",
    age: 12,
    phone: "+98 9304106774",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 49,
    name: "سید سعید نوری",
    age: 13,
    phone: "+98 9241331415",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 50,
    name: "سید آرزو محمدی",
    age: 12,
    phone: "+98 9834072175",
    gender: "دختر",
    loc: "محبین",
  },
];

export const initDatabase = async () => {
  const db = await dbPromise;

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      age INTEGER,
      phone TEXT,
      gender TEXT CHECK(gender IN ('پسر', 'دختر')),
      loc TEXT CHECK(loc IN ('اتابک', 'محبین'))
    );
  `);
};

export const insertDefaultData = async () => {
  const db = await dbPromise;

  const countResult = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) as count FROM students');
  if (countResult && countResult.count > 0) return;

  console.log('در حال وارد کردن ۵۰ دانش‌آموز...');

  for (const s of defaultStudents) {
    await db.runAsync(
      `INSERT INTO students (id, name, age, phone, gender, loc) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      s.id, s.name, s.age, s.phone, s.gender, s.loc
    );
  }

  console.log('✅ تمام داده‌ها با موفقیت وارد شدند!');
};

// تابع خواندن همه
export const getAllStudents = async (): Promise<Student[]> => {
  const db = await dbPromise;
  return await db.getAllAsync<Student>('SELECT * FROM students ORDER BY name');
};