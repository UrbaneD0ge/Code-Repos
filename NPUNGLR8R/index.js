const inquirer = require('inquirer');
let meet = '';
let chair = '';
let planner = '';
// const util = require('util');


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
                chair = `Brinkley Dickerson	wbdnatl@gmail.com`
                planner = `Joel Carnow jdcarnow@atlantaga.gov`
                break;
            case 'B':
                meet = `Meeting ID:	832 4836 8602
Dial In: +1 646 558 8656	Access Code: 832 4836 8602#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tZcvc-GrqDMsGtbvnnKzpDF2BbUXxQuxx_N9`
                chair = `Nancy Bliwise	nancy.bliwise@emory.edu`
                planner = `Jessica Lavandier jlavandier@atlantaga.gov`
                break;
            case 'C':
                meet = `Meeting ID:	934 4511 6340
Dial In: +1 646-558-8656 	Access Code: 934 4511 6340#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJcpc-yprz0pHtRSCH0nTWazoXg72njNpQ5R`
                chair = `Zack Gober	zgober@lavista.com`
                planner = `Alex Deus adeus@atlantaga.gov`
                break;
            case 'D':
                meet = `Meeting ID:	953 5469 3520
Dial In: +1 646-558-8656 	Access Code: 953 5469 3520#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJEucu2upzgvGNRkuGmiYcE2akuYMkFc1av`
                chair = `Jim Martin james.martin@me.gatech.edu`
                planner = `Nate Hoelzel nhoelzel@atlantaga.gov`
                break;
            case 'E':
                meet = `Webinar ID: 920 3606 4688
Webinar ID: +1 929-436-2866
Register in advance for this meeting:
https://us06web.zoom.us/webinar/register/WN_TejPEO2GTDygUW6uq02yAg`
                chair = `Nabil Hammam nabilhammam@yahoo.com`
                planner = `Monique Forte mbforte@atlantaga.gov`
                break;
            case 'F':
                meet = `Meeting ID:	928 1513 1493
Dial In: +1 646-558-8656 	Access Code: 928 1513 1493#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYlduyprTouE9c3GbvSNXk-QnBIMbRu-Zg3`
                chair = `Debbie Skopczynski	Chair@npufatlanta.org`
                planner = `Doug Young dyoung@atlantaga.gov`
                break;
            case 'G':
                meet = `Meeting ID:	935 8093 0222
Dial In: +1 646-558-8656 	Access Code: 935 8093 0222#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJcof-mhrTsoGNbC6XrB8Sr6HKX7E8hPLfjH`
                chair = `Andrew Anderson andrewnanderson2012@icloud.com`
                planner = `Kelly Dervarics kmdervarics@atlantaga.gov`
                break;
            case 'H':
                meet = `Meeting ID:	976 5253 7837
Dial In: +1 646-558-8656 	Access Code:  976 5253 7837#
Register in advance for this meeting:
https://zoom.us/j/97652537837`
                chair = `R.R. Harris harrischairnpuh@gmail.com`
                planner = `Natasha Dyer ndyer@atlantaga.gov`
                break;
            case 'I':
                meet = `Meeting ID:	926 1333 2610
Dial In: +1 646-558-8656 	Access Code:  926 1333 2610#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYrduqrrTksG9Q0zhO-fIWbSdULod3adqpH`
                chair = `Eunice M. Glover Chair.npui@gmail.com`
                planner = `Susan Coleman sucoleman@atlantaga.gov`
                break;
            case 'J':
                meet = `Meeting ID:	914 9575 9127
Dial In: +1 646-558-8656 	Access Code:  914 9575 9127#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJUpfuyvqzIrGNPisSUqavtB5wdLiJTeHVFD`
                chair = `Anissa Ferrell	chair@npujatlanta.com`
                planner = `Keyetta Holmes kmholmes@atlantaga.gov`
                break;
            case 'K':
                meet = `Meeting ID:	961 2883 9632
Dial In: +1 646 558 8656	Access Code: 961 2883 9632#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0pfuuuqjosG9SFlf4neD6B5HLB18AX5zGe`
                chair = `Mohamed Sillah	npukatlanta@gmail.com`
                planner = `Tshaka Warren twarren@atlantaga.gov`
            break;
            case 'L':
                meet = `Meeting ID:	961 2883 9632
Dial In: +1 646 558 8656	Access Code: 961 2883 9632#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
                chair = `Shade'Y. Jones	chair@npulatlanta.org`
                planner = `Lenise Lyons llyons@atlantaga.gov`
            break;
            case 'M':
                meet = `Meeting ID:	972 3364 7127
Dial In: +1 646 558 8656	Access Code: 972 3364 7127#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMvdOquqjwrGNMzjeUO15u88PSooneRz2Fp`
                chair = `Forrest Coley	chair@npumatlanta.org`
                planner = `Matt Adams mdadams@atlantaga.gov`
            break;
            case 'N':
                meet = `Meeting ID:	970 8448 6658
Dial In: +1 646 558 8656	Access Code: 970 8448 6658#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMtf-2spj0sH9z2bFgZI2LX-Bna7OWVyoFq`
                chair = `Catherine Woodling	npunchair@gmail.com`
                planner = `Daniel Vasquez dvasquez@atlantaga.gov`
            break;
            case 'O':
                meet = `Meeting ID:	812 4045 1335
Dial In: +1 646 558 8656	Access Code: 812 4045 1335#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
                chair = `Jeanne Tropper	chair@atlantanpuo.org`
                planner = `Racquel Jackson acanales@atlantaga.gov`
            break;
            case 'P':
                meet = `Meeting ID:	940 8702 7097
Dial In: +1 646 558 8656	Access Code: 940 8702 7097#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtf-6orDwqE9MQK1U4WkG2s0y9ZSsZj55C`
                chair = `Reginald Rushin Rushinr58@gmail.com`
                planner = `Nicole Mitchell nymitchell@atlantaga.gov`
            break;
            case 'Q':
                meet = `Meeting ID:	985 5727 1692
Dial In: +1 646 558 8656	Access Code: 985 5727 1692#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJwocu6qqTosE9bW-XHCnSGMWaOAnKCKqrkS`
                chair = `Corrie McCrary	corriemccrary@bellsouth.net`
                planner = `Inyo Cue icue@atlantaga.gov`
            break;
            case 'R':
                meet = `Meeting ID:	886 2169 6544
Dial In: +1 646 558 8656	Access Code: 886 2169 6544#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tZwrdeiupz0vHtCSIPdEIa-N6avVbaNnGXlb`
                chair = `Donovan A. Dodds npur.exc@gmail.com`
                planner = `Tony McNeal mmcneal@atlantaga.gov`
            break;
            case 'S':
                meet = `Meeting ID:	993 2987 4388
Dial In: +1 646 558 8656	Access Code: 993 2987 4388#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0udeCgqT8pEtycXQZ9s7Tk4_0J_73DZmQD`
                chair = `Nick Hess chair@npu-s.org`
                planner = `Chris McIntosh cmintosh@atlantaga.gov`
            break;
            case 'T':
                meet = `Meeting ID:	973 7964 7582
Dial In: +1 646 558 8656	Access Code: 973 7964 7582#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMucOCuqjwvEtbo8Vddwe6J5Ykv5858FP9y`
                chair = `Angela Clyde chair@nputatlanta.com`
                planner = `Monique Forte mbforte@atlantaga.gov`
            break;
            case 'V':
                meet = `Meeting ID:	992 1132 0112
Dial In: +1 646 558 8656	Access Code: 992 1132 0112#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0vduirrDsrG9Zu7U9P7xTvxATCljNqAgyJ`
                chair = `Stephanie Flowers stephanieflowers@bellsouth.net`
                planner = `Nathan Brown nathanbrown@atlantaga.gov`
            break;
            case 'W':
                meet = `Meeting ID:	916 2580 5725
Dial In: +1 646 558 8656	Access Code: 916 2580 5725#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJUrdeygrj4tGNFBx8eTSLrBvv1Zy4uPsqgD`
                chair = `Ronald Lall leadership@npu-w.org`
                planner = `Christian Olteanu colteanu@atlantaga.gov`
            break;
            case 'X':
                meet = `Meeting ID:	940 6017 9815
Dial In: +1 646 558 8656	Access Code: 940 6017 9815#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
                chair = `Zachary Adriaenssens Zadriaenssens3@gmail.com`
                planner = `Nate Hoelzel nhoelzel@atlantaga.gov`
            break;
            case 'Y':
                meet = `Meeting ID:	956 6564 6943
Dial In: +1 646 558 8656	Access Code: 956 6564 6943#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
                chair = `Troy Nunnally troynunnally@brainrainsolutions.com`
                planner = `Anna A. Johnson anajohnson@atlantaga.gov`
            break;
            case 'Z':
                meet = `Meeting ID:	929 8209 4616
Dial In: +1 646 558 8656	Access Code: 929 8209 4616#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYkf-uopz8sG9J66kd94W5qRcrwP2Qb_jQ7`
                chair = `Anne E. Phillips anne.phillips@bellsouth.net`
                planner = `Thomas Otoo totoo@atlantaga.gov`
            break;
            case 'APAB':
                meet = `Meeting ID: 947 9575 5692
Dial In: +1 646-558-8656
Access Code: 947 9575 5692#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAqfuyvqz4sE9aRG-HDEoLldjZtzVXF4uuK`
                chair = `Anne E. Phillips anne.phillips@bellsouth.net`
                planner = `Samantha Terry snterry@atlantaga.gov`
                break;
            default:
                console.log(`Please select one of the 25 NPUs A-Z or APAB.`)
                break;
            }
    console.log(meet);
    return (meet, planner, chair);
};



function ReadMeNOW(answers) {
return `Greetings!

You are receiving this e-mail because you opted in for monthly meeting notices for NPU-${answers.title}.

Agendas for monthly NPU meetings are posted on our website:

Neighborhood Directory and NPU Meeting Agendas | Atlanta, GA (atlantaga.gov)

NPU-${answers.title} | ${answers.date}

${getMeeting(meet)}

City of Atlanta residents are encouraged to attend their local Neighborhood Planning Unit (NPU) meetings to review proposed development, applications for alcohol licenses and special events, as well as amendments to the City’s Zoning Ordinance and Comprehensive Development Plan. Thanks again for your commitment to being actively involved in the City of Atlanta’s future!

If you desire additional information regarding NPU-${answers.title}, please contact the following person(s):

NPU Chair: ${getMeeting(chair)}
NPU Planner: ${getMeeting(planner)}

Thank you,`
};

const init = () => {
    inquirify()
    .then((answers) => console.log(ReadMeNOW(answers)))
    .catch((err) => console.error(err));
};

init();