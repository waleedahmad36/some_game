import React, { useState } from 'react';
import { SKILL_LIST } from '../utils/constants';

const PartySkillCheck = ({ characters }) => {
  const [selectedSkill, setSelectedSkill] = useState(SKILL_LIST[0].name);
  const [dc, setDc] = useState(10);
  const [result, setResult] = useState(null);


  result && console.log(result)

  const performPartySkillCheck = () => {
    const characterWithHighestSkill = characters.reduce((highest, character) => {
      const skillTotal = character.skills[selectedSkill] + Math.floor((character.attributes[SKILL_LIST.find(skill => skill.name === selectedSkill).attributeModifier] - 10) / 2);
      return skillTotal > highest.skillTotal ? { character, skillTotal } : highest;
    }, { character: null, skillTotal: -Infinity });

    const roll = Math.floor(Math.random() * 20) + 1;
    const total = roll + characterWithHighestSkill.skillTotal;
    const success = total >= dc;
    setResult({ character: characterWithHighestSkill.character, roll, total, success });
  };

  return (
    <div className="mt-4 p-4 border rounded">
      <h4 className="font-bold mb-2">Party Skill Check</h4>
      <div className="mb-2">
        <label className="mr-2">Skill:</label>
        <select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)} className="border px-2 py-1">
          {SKILL_LIST.map(skill => (
            <option key={skill.name} value={skill.name}>{skill.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="mr-2">DC:</label>
        <input
          type="number"
          value={dc}
          onChange={(e) => setDc(Number(e.target.value))}
          className="border px-2 py-1"
        />
      </div>
      <button onClick={performPartySkillCheck} className="bg-blue-500 text-white px-4 py-2 rounded">Roll</button>
      {result && (
        <div className="mt-2">
          <p>Character: {result.character?.name}</p>
          <p>Roll: {result.roll}</p>
          <p>Total: {result.total}</p>
          <p>{result.success ? 'Success!' : 'Failure'}</p>
        </div>
      )}
    </div>
  );
};

export default PartySkillCheck;
