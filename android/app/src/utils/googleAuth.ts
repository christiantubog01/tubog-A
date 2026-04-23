import {
  GoogleSignin,
  SignInResponse,
} from '@react-native-google-signin/google-signin';

export const configureGoogle = (): void => {
  GoogleSignin.configure({
    webClientId: '739876115895-jh1u6ugocddrhq1q15fmh0j3c75kbuc8.apps.googleusercontent.com',
  });
};

export const signInWithGoogle = async (): Promise<SignInResponse | null> => {
  try {
    await GoogleSignin.hasPlayServices();

    const response = await GoogleSignin.signIn();

    return response;
  } catch (error) {
    console.log('Google Sign-In Error:', error);
    return null;
  }
};
