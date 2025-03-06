// app/admin/about-editor.tsx
"use client";
import { useState } from 'react';
import styles from '@/styles/AdminEditor.module.scss';

export default function AboutEditor() {
  const [about, setAbout] = useState({
    mainImage: "/gallery3.png",
    missionImage: "/mission-image.jpg",
    teamPhoto: "/team.jpg",
    values: ["Excellence", "Quality", "Determination"]
  });

  const saveChanges = async () => {
    const response = await fetch('/api/save-about', {
      method: 'POST',
      body: JSON.stringify(about)
    });
    alert('Saved! 🎉');
  };

  return (
    <div className={styles.editor}>
      <h1>📖 About Page Editor</h1>

      <div className={styles.section}>
        <h2>🏢 Main Section</h2>
        <div className={styles.inputGroup}>
          <label>Main Image URL:</label>
          <input
            value={about.mainImage}
            onChange={e => setAbout({...about, mainImage: e.target.value})}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Mission Image URL:</label>
          <input
            value={about.missionImage}
            onChange={e => setAbout({...about, missionImage: e.target.value})}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2>👥 Team Section</h2>
        <div className={styles.inputGroup}>
          <label>Team Photo URL:</label>
          <input
            value={about.teamPhoto}
            onChange={e => setAbout({...about, teamPhoto: e.target.value})}
          />
        </div>
      </div>

      <button onClick={saveChanges} className={styles.saveButton}>
        💾 Save About Page
      </button>
    </div>
  );
}