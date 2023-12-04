import React, { useState } from "react";
import projectsDatas from "../../datas/projects.json";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section className="gallery" id="gallery">
      <h2>Galerie</h2>
      <div className="gallery__content">
        <ul className="gallery__content__filters">
          <li className="gallery__content__filters__filter">
            <span>Tous</span>
          </li>
          <li className="gallery__content__filters__filter">
            <span>Abstraits</span>
          </li>
        </ul>
        <div className="gallery__content__projects">
          {projectsDatas.map((project) => (
            <div
              key={project.id}
              className="gallery__content__projects__project"
            >
              <img
                src={`/paintings/${project.url}`}
                alt={project.title}
                onClick={() => openModal(project)}
              />
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="modal__close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal__content">
            <img
              src={`/paintings/${selectedProject.url}`}
              alt={selectedProject.title}
            />
          </div>
        </div>
      )}
    </section>
  );
}
