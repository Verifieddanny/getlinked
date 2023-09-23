import React, { useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import star from "../assets/star.svg";
import grayStar from "../assets/grey_star.svg";
import purple from "../assets/purple_star.svg";

function TimeLine() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <section className="py-[2rem] pt-[4rem] relative" id="timeline">
      <h1 className="text-center timeP" data-aos="fade-down">
        Timeline
      </h1>
      <p className="text-center mt-[2rem]" data-aos="fade-down">
        Here is the breakdown of the time we anticipate <br />
        using for the upcoming event.
      </p>
      <div className="md:block hidden">
        <Timeline position="alternate-reverse">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              className="title"
              style={{ fontWeight: "bolder" }}
              data-aos="fade-left"
            >
              November 18, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                1
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-right">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Hackathon Announcement
              </Typography>
              <Typography>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              className="title"
              style={{ fontWeight: "bolder" }}
              data-aos="fade-right"
            >
              November 18, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                2
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Teams Registration begins
              </Typography>
              <Typography>
                {" "}
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              className="title"
              style={{ fontWeight: "bolder" }}
              data-aos="fade-left"
            >
              November 18, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                3
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-right">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Teams Registration ends
              </Typography>
              <Typography>
                Interested Participants are no longer Allowed to register
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              // color="text.secondary"
              className="title"
              style={{ fontWeight: "bolder" }}
              data-aos="fade-right"
            >
              November 18, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                4
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Announcement of the accepted teams and ideas
              </Typography>
              <Typography>
                {" "}
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              // color="text.secondary"
              className="title"
              style={{ fontWeight: "bolder" }}
              data-aos="fade-left"
            >
              November 18, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                5
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-right">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Getlinked Hackathon 1.0 Offically Begins
              </Typography>
              <Typography>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              // color="text.secondary"
              className="title"
              style={{ fontWeight: "bolder" }}
              data-aos="fade-right"
            >
              November 18, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                6
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Demo Day
              </Typography>
              <Typography>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="md:hidden block">
        <Timeline
          position="right"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          style={{ overflowX: "hidden" }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                1
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Hackathon Announcement
              </Typography>
              <Typography>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </Typography>
              <Typography className="title" style={{ fontWeight: "bolder" }}>
                November 18, 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                2
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Teams Registration begins
              </Typography>
              <Typography>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </Typography>
              <Typography className="title" style={{ fontWeight: "bolder" }}>
                November 18, 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                3
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Teams Registration ends
              </Typography>
              <Typography>
                Interested Participants are no longer Allowed to register
              </Typography>
              <Typography className="title" style={{ fontWeight: "bolder" }}>
                November 18, 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                4
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Announcement of the accepted teams and ideas
              </Typography>
              <Typography>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </Typography>
              <Typography className="title" style={{ fontWeight: "bolder" }}>
                November 18, 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                5
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Getlinked Hackathon 1.0 Offically Begins
              </Typography>
              <Typography>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </Typography>
              <Typography className="title" style={{ fontWeight: "bolder" }}>
                November 18, 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                }}
                data-aos="fade-down"
              />
              <TimelineDot
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
                  backgroundSize: "cover",
                }}
                className="w-[3.3125rem] h-[3.3125rem] rounded-full text-[1.25rem] font-bold bg-secondary flex justify-center items-center"
                data-aos="fade-down"
              >
                6
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} data-aos="fade-left">
              <Typography
                variant="h6"
                component="span"
                className="title"
                style={{ fontWeight: "bolder" }}
              >
                Demo Day
              </Typography>
              <Typography>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </Typography>
              <Typography className="title" style={{ fontWeight: "bolder" }}>
                November 18, 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <img
        src={purple}
        className="absolute top-[8rem] md:block hidden left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[15rem] md:block hidden right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={grayStar}
        className="absolute top-[55rem] md:block hidden left-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
    </section>
  );
}

export default TimeLine;
