import localFont from 'next/font/local'

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const MonaRegular = localFont({ src: './Mona-Sans-Regular.ttf' });
const MonaMedium = localFont({ src: './Mona-Sans-Medium.ttf' });
const MonaSemiBold = localFont({ src: './Mona-Sans-SemiBold.ttf' });
const MonaBold = localFont({ src: './Mona-Sans-Bold.ttf' });

export { MonaRegular, MonaMedium, MonaSemiBold, MonaBold }