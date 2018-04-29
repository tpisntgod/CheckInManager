import crypto from 'crypto';

export function generateCheckinID(course_id) {
  return crypto.createHmac('sha1', Date.now().toString())
    .update(course_id + 'ugnamsung 15331117' + new Date())
    .digest('hex');
}
