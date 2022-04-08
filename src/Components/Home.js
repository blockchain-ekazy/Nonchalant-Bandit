import React from "react";
import "./Home.css";

import GifS from "../Components/Imgs/ezgif.com-gif-maker.gif";

import Bnr from "../Components/Imgs/NBGC Banner.webp";

import RD from "../Components/Imgs/Racoon-logo-round.png";

import TeamA from "../Components/Imgs/David-removebg-preview.png";
import TeamB from "../Components/Imgs/Sanjay-removebg-preview.png";

import logo1 from "./Imgs/logo1.png";
import logo2 from "./Imgs/logo2.png";
import logo3 from "./Imgs/logo3.png";

export default function Home() {
  return (
    <div className="Sara">
      <div className="home conatiner-fluid p-3 ">
        <div class="container p-0 pr-md-5">
          <div className="row align-items-center">
            <div className="col-8 col-md-6 ">
              <a target="_blank" href="https://twitter.com/NonchalantBnft">
                <i class="fa-brands fa-twitter WTSV ico "></i>
              </a>
              <a
                target="_blank"
                href="https://instagram.com/nonchalantbanditnft"
              >
                <i class="fa-brands fa-instagram WTSV ico ml-3"></i>
              </a>
              <a
                target="_blank"
                href="https://discord.com/channels/939666076726333460/939666081163935781"
              >
                <i class="fa-brands fa-discord WTSV ico ml-3"></i>
              </a>
            </div>

            <div className="col-4 main col-md-6">
              <label class="menu-button-wrapper" for="">
                <input type="checkbox" class="menu-button"></input>
                <div class="icon-wrapper">
                  <label class="hamburger">
                    <input class="hamburger-input " type="checkbox"></input>
                    <span class="hamburger-line first"></span>
                    <span class="hamburger-line second"></span>
                    <span class="hamburger-line third"></span>
                  </label>
                </div>
                <div class="item-list mr-5">
                  <div>
                    <a href="#H">Home</a>
                  </div>
                  <div>
                    <a href="#A">About</a>
                  </div>
                  <div>
                    <a href="#RD">Road Map</a>
                  </div>
                  <div>
                    <a href="#T">Team</a>
                  </div>
                  <div>
                    <a href="#Faq">FAQ</a>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="container  Overlay">
          <div className="row align-items-center">
            <div className="col-12 col-lg-12 pt-3">
              <h1 className="text-center display-4 WTSV">
                The Nonchalant Bandit Golf Club
              </h1>
              <h1 className="text-white text-center ">COMING SOON!</h1>
              <h4 className="text-white text-center py-3 ">
                <a
                  href="https://metamask.io/faqs/"
                  target="blank"
                  className="h4"
                >
                  {" "}
                  How to set up a MetaMask Wallet 🦊
                </a>
              </h4>
              <h5 className="text-white text-center ">
                10,000 Nonchalant Bandits shaping the course of golf
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="DivB container-fluid py-5">
        <a id="A"></a>
        <div className=" container  pt-5 ">
          <div className="row About">
            <div className="col-12 col-lg-6">
              <h1 className="text-center display-4 WTSV">
                The Nonchalant Bandit Golf Club
              </h1>
              <p className="text-white pt-5">
                The Nonchalant Bandit Golf Club will be a members club like no
                other. Something similar has recently been launched, but not
                like this. We're looking to be one of the most exclusive golf
                clubs IRL and the Metaverse. It’ll be so unique that everyone
                will want your NFT off you! <br />
                <br />
                Owning tokens will not only give you the chance be part of an
                extremely exclusive golf club and community, but give you the
                chance to purchase rare merchandise unavailable to anyone else
                and chances to win huge amounts of money.<br></br>
                <br />
                Over the coming years, we plan to have exclusive golf clubs
                strategically placed all over the world...we look forward to
                welcoming you to our community and being part of a very
                exclusive movement.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              {/* <img src={DivBImg} className="w-100"></img> */}
              <img src={GifS} className="w-100 TeamImgs"></img>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------------------------------------- */}

      <a id="RD"> </a>

      <div class=" my-5">
        <h1 className="text-center text-white display-4">
          Road <img src={RD} className="RDImg w-50"></img> Map{" "}
        </h1>

        <div class="container">
          <div class="row align-items-center how-it-works d-flex">
            <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
              <div class="circle font-weight-bold">1</div>
            </div>
            <div class="col-10 col-md-10 ">
              <h5 className="text-white">Phase 1</h5>
              <p className="text-white">
                {" "}
                • Giveaway 100 NFTs to early supporters <br />
                • Mint all NFTs for 0.08 ETH <br />
                • Planting of 50,000 trees…enough to fill a golf course <br />
                • Donate $50,000 each to a US and UK foundation for introducing
                kids to golf <br />
                • Send out all original holders a unique, one-off piece of
                headwear never to be available to the public <br />• Randomly
                generate a monthly winner to get 2 ETH deposited into their
                wallet
              </p>
            </div>
          </div>

          <div class="row timeline">
            <div class="col-2">
              <div class="corner top-right"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner left-bottom"></div>
            </div>
          </div>

          <div class="row align-items-center justify-content-end how-it-works d-flex">
            <div class="col-10 col-md-10 text-right">
              <h5 className="text-white">Phase 2</h5>
              <p className="text-white">
                • Collection 2 drops <br />
                • Holders of Drop 1 will get discounted and priority access to
                drop 2 <br />
                • Mint remaining NFTs <br />
                • Donate further funds to the development of kids golf + 1 other
                charity chosen by discord members <br />
                • Launch official merchandise only available for token holders
                to purchase. <br />• Further monthly giveaways of ETH
              </p>{" "}
            </div>
            <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div class="circle font-weight-bold">2</div>
            </div>
          </div>

          <div class="row timeline">
            <div class="col-2">
              <div class="corner right-bottom"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner top-left"></div>
            </div>
          </div>
          <div class="row align-items-center bottom how-it-works d-flex">
            <div class="col-2 text-center  top d-inline-flex justify-content-center align-items-center ">
              <div class="circle font-weight-bold">3</div>
            </div>
            <div class="col-10 col-md-10">
              <h5 className="text-white">Phase 3</h5>
              <p className="text-white">
                • Collection 3 drops <br />
                • Holders of both collections 1 and 2 receive a FREE NFT*
                <br />
                • Mint remaining NFT’s
                <br />
                • Purchase a golf course, completely renovate to a premium
                standard
                <br />
                • ONLY holders of collections 1,2 AND 3 get the chance to join
                this golf club
                <br />
                • Holders of any 2 collections get 2 green fee vouchers a year
                with guest
                <br />• Holders of any 1 collection get 1 green fee a year +
                guest
              </p>{" "}
            </div>
          </div>

          <div class="row timeline">
            <div class="col-2">
              <div class="corner top-right"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner left-bottom"></div>
            </div>
          </div>

          <div class="row align-items-center bottom justify-content-end how-it-works d-flex">
            <div class="col-6 text-right">
              <h5 className="text-white">Phase 4</h5>
              <p className="text-white ">
                • Project 2 starts with even bigger incentives!
              </p>
            </div>
            <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div class="circle font-weight-bold">4</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-4">
        <div className="row logos">
          <div className="col-4 px-0">
            <img src={logo1} />
          </div>
          <div className="col-4 px-0">
            <img src={logo2} />
          </div>
          <div className="col-4 px-0">
            <img src={logo3} />
          </div>
        </div>
      </div>

      <small className="pb-1 d-block text-white text-center  py-5">
        *1 per wallet, not one per NFT held.
      </small>

      <a id="Faq"></a>
      <div className="FaqDiv container-fluid pb-5">
        <div className="container">
          <h1 className="text-center display-4 WTSV">Nonchalant FAQ's</h1>
        </div>
      </div>

      <div class="container pb-5">
        <div class="row">
          <div class="col-lg-12  p-0 ">
            <div id="accordionExample" class="accordion shadow AllFaq">
              <div class="card">
                <div
                  id="headingOne"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="#collapseOne"
                      data-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      class="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                    >
                      WHAT ARE NONCHALANT BANDITS?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                  class="collapse show"
                >
                  <div class="card-body ">
                    <p class="font-weight-light m-0">
                      Nonchalant Bandits are 10,000 unique NFTs generated from
                      hand drawn traits. There are no two the same and
                      collecting these tokens will bring you many
                      opportunities...please check out our road map.
                    </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div
                  id="headingTwo"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      HOW MUCH WILL THE NFTS BE?{" "}
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                  class="collapse"
                >
                  <div class="card-body ">
                    <p class="font-weight-light m-0">
                      All Nonchalant Bandits will be 0.08 ETH each. There will
                      be a maximum of 5 per wallet allowed.
                    </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div
                  id="headingTw"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseTw"
                      aria-expanded="false"
                      aria-controls="collapseTw"
                      class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      ARE SOME RARER THAN OTHERS{" "}
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseTw"
                  aria-labelledby="headingTw"
                  data-parent="#accordionExample"
                  class="collapse"
                >
                  <div class="card-body ">
                    <p class="font-weight-light m-0">
                      The short answer is yes. Although they are randomly
                      generated, some traits are more rare than others. All NFTs
                      will be distributed randomly when minted, so no one knows
                      what Bandit they've got until reveal. All will be revealed
                      2-4 days after the collection mints out.
                    </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div
                  id="headingThree"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      HOW DO I GET MY HANDS ON ONE?{" "}
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                  class="collapse"
                >
                  <div class="card-body ">
                    <p class="font-weight-light m-0">
                      We'll be running various competitions via our socials and
                      discord channel for Whitelist spots. Minting will be
                      available here on our website.
                    </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div
                  id="headingT"
                  class="card-header bg-white shadow-sm border-0"
                >
                  <h6 class="mb-0 font-weight-bold">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseT"
                      aria-expanded="false"
                      aria-controls="collapseT"
                      class="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                    >
                      WHEN WILL THEY BE ON SALE?{" "}
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseT"
                  aria-labelledby="headingT"
                  data-parent="#accordionExample"
                  class="collapse"
                >
                  <div class="card-body ">
                    <p class="font-weight-light m-0">
                      The actual date of public minting is unknown yet but will
                      be sometime in March 2022. The presale for people on the
                      whitelist will be 24 hours prior to public sale.
                      <br />
                      <br />
                      There will only be 1,000 whitelist spot availble, so head
                      to our discord channel to get yourself on it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <a id="T"></a>
        <h1 className="text-center pt-5  display-3 WTSV">The Team</h1>
        <p className="text-white text-center">
          We're two guys new to the world of NFT's. We have complimentary
          business skills in the real world and are on a mission to prove that
          with dedication, hard work and a HUGE dream, anything is possible. We
          are both in love with the game of golf and want to create a
          revolutionary community, shaping the future of golf for the next
          generation. Somewhere so unique, token holders will be the envy of all
          golfers around the World.
        </p>
        <div className="row  ">
          <div className="col-12 col-md-6 mt-3">
            <div className="TeamImgs ">
              <img src={TeamA} className="w-100 "></img>
              <h1 className="text-white pt-5 ">LMD</h1>
              <h3 className="text-white pt-4">
                Creator, artist, golf enthusiast
              </h3>
              <p className="text-white  ">
                LMD has been involved in the golf industry for the last 12
                years. Knows what is involved in creating an awesome golf club
                but will take advice from all of its members.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div className="TeamImgs ">
              <img src={TeamB} className="w-100 "></img>
              <h1 className="text-white pt-5">RKS </h1>

              <h3 className="text-white pt-4">
                Advisor, financer, golf enthusiast
              </h3>
              <p className="text-white  ">
                20 year career in investment management. RKS has founded many
                successful companies and is the director of a highly successful
                financial services firm.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <img src={Bnr} className="w-100"></img>
      </div>
    </div>
  );
}
