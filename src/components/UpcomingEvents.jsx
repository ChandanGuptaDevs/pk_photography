import React from "react";
import styled from "styled-components";
import annualTechConferenceImg from "../assets/annual_tech_confrence.jpg";
import springCollectionShootImg from "../assets/spring_collection_shoot.jpg";
import gardenWeddingSpecialImg from "../assets/garden_wedding_special.jpg";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Annual Tech Conference",
      category: "Corporate",
      date: "March 15, 2025",
      time: "10:00 AM EST",
      image: annualTechConferenceImg,
      categoryColor: "#f0e6ff",
    },
    {
      id: 2,
      title: "Spring Collection Shoot",
      category: "Fashion",
      date: "March 20, 2025",
      time: "1:00 PM EST",
      image: springCollectionShootImg,
      categoryColor: "#ffe6f0",
    },
    {
      id: 3,
      title: "Garden Wedding Special",
      category: "Wedding",
      date: "March 25, 2025",
      time: "3:00 PM EST",
      image: gardenWeddingSpecialImg,
      categoryColor: "#e6ffee",
    },
  ];

  return (
    <EventsSection>
      <SectionTitle>Upcoming Events</SectionTitle>

      <EventsGrid>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventImageContainer>
              <EventImage src={event.image} alt={event.title} />
            </EventImageContainer>

            <EventDetails>
              <CategoryTag style={{ backgroundColor: event.categoryColor }}>
                {event.category}
              </CategoryTag>

              <EventTitle>{event.title}</EventTitle>
              <EventDateTime>
                {event.date} • {event.time}
              </EventDateTime>
            </EventDetails>
          </EventCard>
        ))}
      </EventsGrid>
    </EventsSection>
  );
};

const EventsSection = styled.section`
  padding: 2.5rem 0 3.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 2rem 2rem 3rem;
  }

  @media (max-width: 1024px) {
    padding: 1.75rem 2rem 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1rem 1.75rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.75rem;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
    gap: 1.5rem;
  }
`;

const EventCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const EventImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 180px;
  }

  @media (max-width: 992px) {
    height: 170px;
  }

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 576px) {
    height: 180px;
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;

  ${EventCard}:hover & {
    transform: scale(1.05);
  }
`;

const EventDetails = styled.div`
  padding: 1.2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem;
  }
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    padding: 0.25rem 0.7rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
  }
`;

const EventTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 0.5rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;

const EventDateTime = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-weight: 300;
  letter-spacing: 0.3px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default UpcomingEvents;
