import { Download } from "lucide-react";
import BylawsHero from "@/components/bylaws/BylawsHero";
// import Button from "@/components/ui/Button";

export default function BylawsPage() {
  return (
    <>
      <BylawsHero />

      <section className="py-20 bg-nausa-blue">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Download Button */}
          <div className="flex justify-end mb-8">
            <a
              href="/documents/nausa_bylaws.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-nausa-lightblue text-white hover:bg-nausa-vanilla/50 rounded-lg  transition-colors font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/90 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-nausa-blue">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              <a
                href="#article-1"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article I: Meetings
              </a>
              <a
                href="#article-2"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article II: Permanent Board Members
              </a>
              <a
                href="#article-3"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article III: Board of Trustees
              </a>
              <a
                href="#article-4"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article IV: Membership
              </a>
              <a
                href="#article-5"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article V: Corporate Seal, Execution of Instruments
              </a>
              <a
                href="#article-6"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article VI: Amendment To Bylaws
              </a>
              <a
                href="#article-7"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article VII: Indemnification
              </a>
              <a
                href="#article-8"
                className="block py-2 text-gray-700 hover:text-nausa-lightblue transition-colors"
              >
                Article VIII: Dissolution
              </a>
            </nav>
          </div>

          {/* Bylaws Content */}
          <div className="bg-white/90 rounded-xl shadow-lg p-8 md:p-12">
            {/* Article I */}
            <article id="article-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article I: Meetings
              </h2>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 1.1 - Annual Meeting
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    An annual meeting shall be held once each calendar year and
                    annual meeting shall be held at the time and place
                    designated by the Board of Trustees from time to time.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 1.2 - Special Meetings
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Special meetings may be requested by the Board of Trustees
                    and/or elected Board members . A special meeting of members
                    is not required to be held at a geographic location if the
                    meeting is held by means of the internet of other electronic
                    communications technology in a manner pursuant to which the
                    members have the opportunity to read or hear the proceedings
                    substantially concurrent with the occurrence of the
                    proceedings, note on matters submitted to the members, pose
                    questions, and make comments.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 1.3 - Notice
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Written notice of all meetings shall be provided under this
                    section or as otherwise required by law. The Notice shall
                    state the place, date, and hour of meeting, and if for a
                    special meeting, the purpose of the meeting. Such notice
                    shall be mailed to all directors of record at the address
                    shown on the corporate books, at least 10 days prior to the
                    meeting. Such notice shall be deemed effective when
                    deposited in ordinary U.S. mail, properly addressed, with
                    postage prepaid.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 1.4 - Place of Meeting
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Meetings shall be held at the organization&apos;s principal
                    place of business unless otherwise stated in the notice.
                    Unless the articles of incorporation or bylaws provide
                    otherwise, the board of trustees may permit any or all
                    trustees to participate in a regular or special meeting by,
                    or conduct the meeting through the use of, any means of
                    communication by which all trustees and/or board members
                    participating may simultaneously hear each other during this
                    meeting. A trustee participating in a meeting by this means
                    shall be deemed to be present in person at the meeting.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 1.5 - Quorum
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A majority of the board members shall constitute a quorum at
                    a meeting. In the absence of a quorum, a majority of the
                    board members may adjourn the meeting to another time
                    without further notice. If a quorum is represented at an
                    adjourned meeting, any business may be transacted that might
                    have been transacted at the meeting as originally scheduled.
                    The board members present at a meeting represented by a
                    quorum may continue to transact business until adjournment,
                    even if the withdrawal of some board members results in
                    representation of less than a quorum.
                  </p>
                </section>
              </div>
            </article>

            <div className="border-t border-1 border-nausa-blue/50 my-12"></div>

            {/* Article II */}
            <article id="article-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article II: Permanent Board Members
              </h2>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.1 - Permanent Board Members
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The organization shall be managed by Permanent Board Members
                    consisting of 5 individuals.These five individuals are,
                    Faruk Dilshat Abdukadir, Ada Dilshat Abdukadir, Dilavur
                    Dilshat, Muhtar Böku, and Mershad Shahabidin.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.2 - Election and Term of Office
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The five permanent board members were elected by the 8
                    Uyghur soccer teams (Uyghur United FC, Yulghun FC, Maryland
                    Uyghur FC, Golden State Elites FC, Canada Uyghur FC,
                    Izchilar FC, Lachin FC, and Boston & NY Uyghur United FC) in
                    North America in Fairfax, Virginia on August 8th, 2023.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.3 - Quorum
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A majority of directors shall constitute a quorum.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.4 - Adverse Interest
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the determination of a quorum of the directors, or in
                    voting, the disclosed adverse interest of a director shall
                    not disqualify the director or invalidate his or her vote.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.5 - Regular Meeting
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Permanent Board Directors shall meet immediately after
                    the election for the purpose of electing its new officers,
                    appointing new committee chairpersons and for transacting
                    such other business as may be deemed appropriate. The Board
                    of Directors may provide, by resolution, for additional
                    regular meetings without notice other than the notice
                    provided by the resolution.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.6 - Special Meeting
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Special meetings may be requested by the director,
                    treasurer, event coordinator, team liaison, or the
                    marketing/media director, or any two directors by providing
                    five days written notice by ordinary United States mail
                    and/or electronic mail, effective when mailed. Minutes of
                    the meeting shall be sent to the Board of Directors within
                    two weeks after the meeting. A special meeting of members is
                    not required to be held at a geographic location if the
                    meeting is held by means of the internet of other electronic
                    communications technology in a manner pursuant to which the
                    members have the opportunity to read or hear the proceedings
                    substantially concurrent with the occurrence of the
                    proceedings, note on matters submitted to the members, pose
                    questions, and make comments.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.7 - Procedures
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The vote of a majority of the directors present at a
                    properly called meeting at which a quorum is present shall
                    be the act of the Permanent Board Members, unless the vote
                    of a greater number is required by law or by these by-laws
                    for a particular resolution. A director of the organization
                    who is present at a meeting of the Board of Directors at
                    which action on any corporate matter is taken shall be
                    presumed to have assented to the action taken unless their
                    dissent shall be entered in the minutes of the meeting. The
                    Board shall keep written minutes of its proceedings in its
                    permanent records.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.8 - Informal Action
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any action required to be taken at a meeting of directors,
                    or any action which may be taken at a meeting of directors
                    or of a committee of directors, may be taken without a
                    meeting if a consent in writing setting forth the action so
                    taken, is signed by all of the directors or all of the
                    members of the committee of directors, as the case may be.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.9 - Removal / Vacancies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Permanent Board Members shall be subject to removal, with or
                    without cause, at a meeting called for that purpose. Any
                    vacancy that occurs on the Permanent Board Members, whether
                    by death, resignation, removal or any other cause, may be
                    filled by the remaining members. A member elected to fill a
                    vacancy shall serve the remaining term of his or her
                    predecessor, or until a successor has been elected and
                    qualified.to be replaced you must be nominated by the board
                    of trustees and board members serving 3 year term, however,
                    the position must be elected by the board of trustees
                    (permanent members).
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 2.10 - Committees
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To the extent permitted by law, the Board of Directors may
                    appoint from its members a committee or committees,
                    temporary or permanent, and designate the duties, powers and
                    authorities of such committees.
                  </p>
                </section>
              </div>
            </article>

            <div className="border-t border-1 border-nausa-blue/50 my-12"></div>

            {/* Article III */}
            <article id="article-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article III: Board of Trustees
              </h2>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 3.1 - Number of Officers
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The terms officers and board of trustees will be used
                    interchangeably and these 5 officers of the organization
                    shall be a Chairman, Treasurer, Team Liaison, Event
                    Coordinator, and Media/Marketing Director. These 5 officers
                    will form as the board of trustees.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>
                      <span className="font-bold">Chairman:</span> The director
                      shall be the chief executive officer and shall preside at
                      all meetings of the Board of Directors and its Executive
                      Committee, if such a committee is created by the Board.
                      Director will oversee the organization. And assist the
                      other officers when needed. Will act as a spokesperson of
                      NAUSA.
                    </li>
                    <li>
                      <span className="font-bold">Treasurer:</span> The
                      Treasurer shall be responsible for conducting the
                      financial affairs of the organization as directed and
                      authorized by the Board of Directors and Executive
                      Committee, if any, and shall make reports of corporate
                      finances as required, but no less often than at each
                      meeting of the Board of Directors and Executive Committee.
                      The treasurer will also cover the legal matters of the
                      organization. Responsible for documentations of the org.
                    </li>
                    <li>
                      <span className="font-bold">Event Coordinator:</span>{" "}
                      Event coordinator will be in communication with the host
                      team/community and plan events related to the
                      organization. Event coordinator will be responsible for
                      all sports related to the org.
                    </li>
                    <li>
                      <span className="font-bold">
                        Meeting/Marketing Director:
                      </span>{" "}
                      This position will be in charge of media and marketing,
                      including social media, contents, and promotions. Website,
                      potentially apps in the future.
                    </li>
                    <li>
                      <span className="font-bold">Team Liaison Director:</span>{" "}
                      Team liaison will communicate with all 8 teams to stay
                      informed about the status of each team and play an
                      important bridge between the teams and the organization.
                      Will be in charge of the membership details with the
                      treasurer.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 3.2 - Election and Term of Office
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The officers shall be elected every three years by all the
                    teams from teams from North America(I would put it by all
                    members of NAUSA). Each officer shall serve a three year
                    term or until a successor has been elected and qualified(Max
                    Two term 6 years). **to be discussed with the board of
                    trustees and team reps in order to qualify to participate in
                    the election of the board members, the team must be part of
                    NAUSA for minimum of three years.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Section 3.3 - Removal or Vacancy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Board of Trustees shall have the power to remove an
                    officer or agent of the organization. Any vacancy that
                    occurs for any reason may be filled by the eight teams which
                    will have one vote per team.
                  </p>
                </section>
              </div>
            </article>

            <div className="border-t border-1 border-nausa-blue/50 my-12"></div>

            {/* Article IV */}
            <article id="article-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article IV: Membership
              </h2>

              <div className="space-y-6">
                <section>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>
                      A member is anyone willing to do his or her part to
                      fulfill the purpose of the organization.
                    </li>
                    <li>
                      All players and coaches of any sport are encouraged to be
                      a member of NAUSA. There is a non-refundable $ _ 25 _
                      annual fee per athlete for this membership. This annual
                      fee is due on January 1. Fiscal year shall be through
                      December 31st of each year. The organization shall keep a
                      list of all current members.
                    </li>
                    <li>
                      There will be ONE voting ticket per team. To be eligible
                      to vote a team representative must have attended three
                      previous NAUSA meetings within the current membership
                      period.
                    </li>
                    <li>
                      The NAUSA reserves the right to refuse or revoke
                      membership of anyone, for any reason, with the unanimous
                      approval from the Board of Trustees.
                    </li>
                    <li>
                      Any further rules and/or regulations regarding the
                      eligibility and qualification for membership and the
                      manner of and admission into such membership shall be
                      prescribed by corporate resolutions duly adopted by the
                      Board of Directors or by such rules and regulations as may
                      be prescribed by said Board of Directors. All such
                      resolutions or rules and regulations relating to and
                      pursuant to membership adopted by the Board of Directors
                      shall be affixed to the Bylaws and shall be deemed to be
                      an integral part thereof. Such resolutions or rules and
                      regulations adopted by the Board of Directors may be
                      prescribed, with respect to all members and membership
                      categories, as follows:{" "}
                      <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                        <li>
                          (i) the amount and manner of imposing and collecting
                          any annual fees, dues or other sums
                        </li>
                        <li>
                          (ii) the manner of imposing assessments, fines and
                          penalties
                        </li>
                        <li>
                          (iii) the manner of suspension or termination of
                          membership
                        </li>
                        <li>(iv) the manner for reinstatement of membership</li>
                        <li>
                          (v) except as may hereinafter otherwise be provided,
                          the rights, liabilities, and other incidents of
                          membership
                        </li>
                      </ul>
                    </li>
                    <li>
                      Permanent Board Members and board of trustees
                      automatically considered as a member and must pay the
                      annual member fee of NAUSA.
                    </li>
                    <li>
                      The rights or interest of a member shall not terminate
                      except upon the consequence of any event, as hereinafter
                      provided:
                      <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                        <li>Death;</li>
                        <li>Expulsion;</li>
                        <li>Resignation; or</li>
                        <li>Dissolution or Liquidation of the Corporation.</li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>
            </article>

            <div className="border-t border-1 border-nausa-blue/50 my-12"></div>

            {/* Article V */}
            <article id="article-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article V: Corporate Seal, Execution of Instruments
              </h2>

              <div className="space-y-6">
                <section>
                  <p className="text-gray-700 leading-relaxed">
                    The organization shall not have a corporate seal. All
                    instruments that are executed on behalf of the organization
                    which are acknowledged and which affect an interest in real
                    estate shall be executed by the President or any
                    Vice-President and the Secretary or Treasurer. All other
                    instruments executed by the organization, including a
                    release of mortgage or lien, may be executed by the
                    President or any Vice-President. Notwithstanding the
                    preceding provisions of this section, any written instrument
                    may be executed by any officer(s) or agent(s) that are
                    specifically designated by resolution of the Permanent Board
                    Members.
                  </p>
                </section>
              </div>
            </article>

            <div className="border-t border-1 border-nausa-blue/50 my-12"></div>

            {/* Article VI */}
            <article id="article-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article VI: Amendment To Bylaws
              </h2>

              <div className="space-y-6">
                <section>
                  <p className="text-gray-700 leading-relaxed">
                    The bylaws may be amended, altered, or repealed by the
                    Permanent Board Members by a majority of a quorum vote at
                    any regular or special meeting. The text of the proposed
                    change shall be distributed to all trustees members at least
                    ten (10) days before the meeting.
                  </p>
                </section>
              </div>
            </article>

            <div className="border-t border-1 border-nausa-blue/50 my-12"></div>

            {/* Article VII */}
            <article id="article-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article VII: Indemnification
              </h2>

              <div className="space-y-6">
                <section>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Any permanent board member or officer who is involved in
                    litigation by reason of his or her position as a permanent
                    board member or officer of this organization shall be
                    indemnified and held harmless by the organization to the
                    fullest extent authorized by law as it now exists or may
                    subsequently be amended (but, in the case of any such
                    amendment, only to the extent that such amendment permits
                    the organization to provide broader indemnification rights).
                  </p>
                </section>
              </div>
            </article>

            <div className="border-t border-1 border-nausa-blue/50 my-12"></div>

            {/* Article VIII */}
            <article id="article-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-nausa-blue">
                Article VIII: Dissolution
              </h2>

              <div className="space-y-6">
                <section className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    The organization may be dissolved only with authorization of
                    its Permanent Board Members given at a special meeting
                    called for that purpose, and with the subsequent approval by
                    no less than two-thirds (2/3) vote of the members. In the
                    event of the dissolution of the organization, the assets
                    shall be applied and distributed as follows:
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All liabilities and obligations shall be paid, satisfied and
                    discharged, or adequate provision shall be made therefore.
                    Assets not held upon a condition requiring return, transfer,
                    or conveyance to any other organization or individual shall
                    be distributed, transferred, or conveyed, in trust or
                    otherwise, to charitable and educational organization,
                    organized under Section 501(c)(3) of the Internal Revenue
                    Code of 1986, as amended, of a similar or like nature to
                    this organization, as determined by the Permanent Board
                    Members.
                  </p>
                </section>
              </div>
            </article>

            {/* Certification */}
            <div className="mt-16 pt-8 border-t-2 border-nausa-blue/50">
              <div className="bg-nausa-lightblue/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-nausa-blue">
                  Certification
                </h3>
                <p className="text-gray-700 mb-4">
                  Faruk Dilshat Abdukadir, Arafat Dilshat Abdukadir, Dilavur
                  Dilshat, Mershad Shahabidin, and Muhtar Boku certify that the
                  foregoing is a true and correct copy of the bylaws of the
                  above-named organization, duly adopted by the initial
                  Permanent Board Members on August 22, 2023.
                </p>
                <p className="text-gray-700 mb-4">
                  I certify that the foregoing is a true and correct copy of the
                  bylaws of the above-named organization, duly adopted by the
                  initial Permanent Board Members on August 22, 2023.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <p className="text-sm text-gray-600">
                      Faruk Dilshat Abdukadir
                    </p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">By</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">7-27-2025</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <p className="text-sm text-gray-600">
                      Arafat Dilshat Abdukadir
                    </p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">By</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">7-27-2025</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <div>
                    <p className="text-sm text-gray-600">Dilavur Dilshat</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">By</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">7-27-2025</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <div>
                    <p className="text-sm text-gray-600">Mershad Shahabidin</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">By</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">7-27-2025</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <div>
                    <p className="text-sm text-gray-600">Muhtar Boku</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">By</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">7-27-2025</p>
                    <div className="border-b-2 border-gray-400 mb-2"></div>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
