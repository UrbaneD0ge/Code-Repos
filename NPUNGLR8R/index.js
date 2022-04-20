const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// inquirer prompts and stores responses
const inquirify = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'NPU Designation?',
        },
        {
            type: 'input',
            name: 'date',
            message: 'Date?',
        },
        // {
        //     type: 'list',
        //     name: 'docType',
        //     message: 'What document are we generating?',
        //     choices: ['Draft to Chair', 'Final to Chair', 'Nextdoor Post', 'Distro eMail', 'NTA']
        // }
    ]);
};


function getMeeting(title) {
        switch(title) {
            case 'A':
                meet = `Meeting ID:	856 7471 3054
Dial In: +1 646 558 8656	Access Code: 856 7471 3054#
Register in advance for this meeting:
https://atlantaga-gov.zoom.us/meeting/register/tZErcO2vrzgqH9ArhFC4ZPNWdLs4yiiBa749`
                break;
            case 'B':
                meet = `Meeting ID:	832 4836 8602
Dial In: +1 646 558 8656	Access Code: 832 4836 8602#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tZcvc-GrqDMsGtbvnnKzpDF2BbUXxQuxx_N9`
                break;
            case 'C':
                meet = `Meeting ID:	934 4511 6340
Dial In: +1 646-558-8656 	Access Code: 934 4511 6340#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJcpc-yprz0pHtRSCH0nTWazoXg72njNpQ5R`
                break;
            case 'D':
                meet = `Meeting ID:	953 5469 3520
Dial In: +1 646-558-8656 	Access Code: 953 5469 3520#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJEucu2upzgvGNRkuGmiYcE2akuYMkFc1av`
                break;
            case 'E':
                meet = `Webinar ID: 920 3606 4688
Webinar ID: +1 929-436-2866
Register in advance for this meeting:
https://us06web.zoom.us/webinar/register/WN_TejPEO2GTDygUW6uq02yAg`
                break;
            case 'F':
                meet = `Meeting ID:	928 1513 1493
Dial In: +1 646-558-8656 	Access Code: 928 1513 1493#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYlduyprTouE9c3GbvSNXk-QnBIMbRu-Zg3`
                break;
            case 'G':
                meet = `Meeting ID:	935 8093 0222
Dial In: +1 646-558-8656 	Access Code: 935 8093 0222#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJcof-mhrTsoGNbC6XrB8Sr6HKX7E8hPLfjH`
                break;
            case 'H':
                meet = `Meeting ID:	976 5253 7837
Dial In: +1 646-558-8656 	Access Code:  976 5253 7837#
Register in advance for this meeting:
https://zoom.us/j/97652537837`
                break;
            case 'I':
                meet = `Meeting ID:	926 1333 2610
Dial In: +1 646-558-8656 	Access Code:  926 1333 2610#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYrduqrrTksG9Q0zhO-fIWbSdULod3adqpH
`
                break;
            case 'J':
                meet = `Meeting ID:	914 9575 9127
Dial In: +1 646-558-8656 	Access Code:  914 9575 9127#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJUpfuyvqzIrGNPisSUqavtB5wdLiJTeHVFD`
                break;
            case 'K':
                meet = `Meeting ID:	961 2883 9632
Dial In: +1 646 558 8656	Access Code: 961 2883 9632#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0pfuuuqjosG9SFlf4neD6B5HLB18AX5zGe`
            break;
            case 'L':
                meet = `Meeting ID:	961 2883 9632
Dial In: +1 646 558 8656	Access Code: 961 2883 9632#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
            break;
            case 'M':
                meet = `Meeting ID:	972 3364 7127
Dial In: +1 646 558 8656	Access Code: 972 3364 7127#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMvdOquqjwrGNMzjeUO15u88PSooneRz2Fp`
            break;
            case 'N':
                meet = `Meeting ID:	970 8448 6658
Dial In: +1 646 558 8656	Access Code: 970 8448 6658#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMtf-2spj0sH9z2bFgZI2LX-Bna7OWVyoFq`
            break;
            case 'O':
                meet = `Meeting ID:	812 4045 1335
Dial In: +1 646 558 8656	Access Code: 812 4045 1335#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
            break;
            case 'P':
                meet = `Meeting ID:	940 8702 7097
Dial In: +1 646 558 8656	Access Code: 940 8702 7097#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtf-6orDwqE9MQK1U4WkG2s0y9ZSsZj55C`
            break;
            case 'Q':
                meet = `Meeting ID:	985 5727 1692
Dial In: +1 646 558 8656	Access Code: 985 5727 1692#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJwocu6qqTosE9bW-XHCnSGMWaOAnKCKqrkS`
            break;
            case 'R':
                meet = `Meeting ID:	886 2169 6544
Dial In: +1 646 558 8656	Access Code: 886 2169 6544#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tZwrdeiupz0vHtCSIPdEIa-N6avVbaNnGXlb`
            break;
            case 'S':
                meet = `Meeting ID:	993 2987 4388
Dial In: +1 646 558 8656	Access Code: 993 2987 4388#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0udeCgqT8pEtycXQZ9s7Tk4_0J_73DZmQD`
            break;
            case 'T':
                meet = `Meeting ID:	973 7964 7582
Dial In: +1 646 558 8656	Access Code: 973 7964 7582#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMucOCuqjwvEtbo8Vddwe6J5Ykv5858FP9y`
            break;
            case 'V':
                meet = `Meeting ID:	992 1132 0112
Dial In: +1 646 558 8656	Access Code: 992 1132 0112#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0vduirrDsrG9Zu7U9P7xTvxATCljNqAgyJ`
            break;
            case 'W':
                meet = `Meeting ID:	916 2580 5725
Dial In: +1 646 558 8656	Access Code: 916 2580 5725#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJUrdeygrj4tGNFBx8eTSLrBvv1Zy4uPsqgD`
            break;
            case 'X':
                meet = `Meeting ID:	940 6017 9815
Dial In: +1 646 558 8656	Access Code: 940 6017 9815#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
            break;
            case 'Y':
                meet = `Meeting ID:	956 6564 6943
Dial In: +1 646 558 8656	Access Code: 956 6564 6943#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
            break;
            case 'Z':
                meet = `Meeting ID:	929 8209 4616
Dial In: +1 646 558 8656	Access Code: 929 8209 4616#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYkf-uopz8sG9J66kd94W5qRcrwP2Qb_jQ7`
            break;
            case 'APAB':
                meet = `Meeting ID: 947 9575 5692
Dial In: +1 646-558-8656
Access Code: 947 9575 5692#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAqfuyvqz4sE9aRG-HDEoLldjZtzVXF4uuK`
            break;
            }
        return meet
};

function ReadMeNOW(answers) {
return `Greetings!

You are receiving this e-mail because you opted in for monthly meeting notices for NPU-${answers.title}.

Agendas for monthly NPU meetings are posted on our website:

Neighborhood Directory and NPU Meeting Agendas | Atlanta, GA (atlantaga.gov)

NPU-${answers.title} | ${answers.date}.

${answers.meet}

City of Atlanta residents are encouraged to attend their local Neighborhood Planning Unit (NPU) meetings to review proposed development, applications for alcohol licenses and special events, as well as amendments to the City’s Zoning Ordinance and Comprehensive Development Plan. Thanks again for your commitment to being actively involved in the City of Atlanta’s future!

If you desire additional information regarding NPU-${answers.title}, please contact the following person(s):

NPU Chair: {chair}
NPU Planner: {planner}

Thank you,`
};

const init = () => {
inquirify()
    .then((answers) => writeFileAsync('NPUNGLR8.txt', ReadMeNOW(answers)))
    .then(() => console.log('NPUNGLIFY!!'))
    .catch((err) => console.error(err));
};

init();