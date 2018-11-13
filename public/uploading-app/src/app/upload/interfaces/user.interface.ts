import { Gender } from '@app/upload/enums/gender.enum';
import { Credentials } from '@app/home/models/credentials.interface';


export interface User {
  id: string;
  fullName: string;
  gender: Gender,
  credentials: Credentials;
}