import { useState } from 'react';

function QuickNote() {
  const [note, setNote] = useState('');

  return (
    <div className="quick-note">
      <div className="input-row">
        <input
          className="field-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Scrie o notă..."
        />
      </div>
      {note && (
        <p className="note-preview">
          <span className="note-preview-label">Preview →</span> {note}
        </p>
      )}
    </div>
  );
}

export default QuickNote;
