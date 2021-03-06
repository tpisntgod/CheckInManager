import { createUserTable, dropUserTable } from './user';
import { createStudentTable, dropStudentTable } from './student';
import { createCourseTable, dropCourseTable } from './course';
import { createCourseMemberTable, dropCourseMemberTable } from './course_member';
import { createCheckinStudentTable, dropCheckinStudentTable } from './checkin_student';
import { createCheckinCourseTable, dropCheckinCourseTable } from './checkin_course';
import { createDatabase } from './util';

export async function initDatabase() {
  // try {
    await createDatabase();
    await createUserTable();
    await createStudentTable();
    await createCourseTable();
    await createCourseMemberTable();
    await createCheckinStudentTable();
    await createCheckinCourseTable();
  // } catch (err) {
  //   process.exit(1);
  // }
}

export async function initDatabaseForTest() {
  // try {
    //? just for test
    await dropUserTable();
    await dropStudentTable();
    await dropCourseTable();
    await dropCourseMemberTable();
    await dropCheckinStudentTable();
    await dropCheckinCourseTable();
    //?-------------------
    await initDatabase();
  // } catch (err) {
  //   console.log(err);
  //   process.exit(1);
  // }
}




