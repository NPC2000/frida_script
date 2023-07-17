//// [octalLiteralAndEscapeSequence.ts]
00;
05;
000;
005;
055;
`0${00}`;
`0${05}`;
`0${000}`;
`0${005}`;
`0${055}`;
`${00}0`;
`${05}0`;
`${000}0`;
`${005}0`;
`${055}0`;

"\0";
"\5";
"\00";
"\05";
"\55";
"\000";
"\005";
"\055";
'\0';
'\5';
'\00';
'\05';
'\55';
'\000';
'\005';
'\055';

"\1";
"\01";
"\001";
"\17";
"\017";
"\0017";
"\177";
"\18";
"\018";
"\0018";
"\4";
"\47";
"\047";
"\0047";
"\477";
"\48";
"\048";
"\0048";
"\8";
"\87";
"\087";
"\0087";
"\877";
"\88";
"\088";
"\0088";
'\1';
'\01';
'\001';
'\17';
'\017';
'\0017';
'\177';
'\18';
'\018';
'\0018';
'\4';
'\47';
'\047';
'\0047';
'\477';
'\48';
'\048';
'\0048';
'\8';
'\87';
'\087';
'\0087';
'\877';
'\88';
'\088';
'\0088';

`\0`;
`\5`;
`\00`;
`\05`;
`\55`;
`\000`;
`\005`;
`\055`;
`${0}\0`;
`${0}\5`;
`${0}\00`;
`${0}\05`;
`${0}\55`;
`${0}\000`;
`${0}\005`;
`${0}\055`;
`\0${0}`;
`\5${0}`;
`\00${0}`;
`\05${0}`;
`\55${0}`;
`\000${0}`;
`\005${0}`;
`\055${0}`;
`${0}\0${0}`;
`${0}\5${0}`;
`${0}\00${0}`;
`${0}\05${0}`;
`${0}\55${0}`;
`${0}\000${0}`;
`${0}\005${0}`;
`${0}\055${0}`;


//// [octalLiteralAndEscapeSequence.js]
0;
5;
0;
5;
45;
"0".concat(0);
"0".concat(5);
"0".concat(0);
"0".concat(5);
"0".concat(45);
"".concat(0, "0");
"".concat(5, "0");
"".concat(0, "0");
"".concat(5, "0");
"".concat(45, "0");
"\0";
"\5";
"\00";
"\05";
"\55";
"\000";
"\005";
"\055";
'\0';
'\5';
'\00';
'\05';
'\55';
'\000';
'\005';
'\055';
"\1";
"\01";
"\001";
"\17";
"\017";
"\0017";
"\177";
"\18";
"\018";
"\0018";
"\4";
"\47";
"\047";
"\0047";
"\477";
"\48";
"\048";
"\0048";
"\8";
"\87";
"\087";
"\0087";
"\877";
"\88";
"\088";
"\0088";
'\1';
'\01';
'\001';
'\17';
'\017';
'\0017';
'\177';
'\18';
'\018';
'\0018';
'\4';
'\47';
'\047';
'\0047';
'\477';
'\48';
'\048';
'\0048';
'\8';
'\87';
'\087';
'\0087';
'\877';
'\88';
'\088';
'\0088';
"\0";
"\u0005";
"\0";
"\u0005";
"-";
"\0";
"\u0005";
"-";
"".concat(0, "\0");
"".concat(0, "\u0005");
"".concat(0, "\0");
"".concat(0, "\u0005");
"".concat(0, "-");
"".concat(0, "\0");
"".concat(0, "\u0005");
"".concat(0, "-");
"\0".concat(0);
"\u0005".concat(0);
"\0".concat(0);
"\u0005".concat(0);
"-".concat(0);
"\0".concat(0);
"\u0005".concat(0);
"-".concat(0);
"".concat(0, "\0").concat(0);
"".concat(0, "\u0005").concat(0);
"".concat(0, "\0").concat(0);
"".concat(0, "\u0005").concat(0);
"".concat(0, "-").concat(0);
"".concat(0, "\0").concat(0);
"".concat(0, "\u0005").concat(0);
"".concat(0, "-").concat(0);
