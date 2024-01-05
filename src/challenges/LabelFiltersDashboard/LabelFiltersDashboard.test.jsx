import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelFilter from './LabelFiltersDashboard';

describe('App component tests', () => {
  beforeEach(() => {
    render(<LabelFilter />);
  });

  test('renders all labels', () => {
    const labels = screen.getAllByTestId('label-id');
    expect(labels.length).toBe(4);
  });

  test('renders all animal tiles initially', () => {
    const tiles = screen.getAllByTestId('animal-tile-id');
    expect(tiles.length).toBe(12);
  });

  test('filters animals by class when a label is clicked', () => {
    const birdsLabel = screen.getByText('Birds');
    fireEvent.click(birdsLabel);
    const visibleTiles = screen.getAllByTestId('animal-tile-id');
    expect(visibleTiles.length).toBe(3);
    visibleTiles.forEach((tile) =>
      expect(tile.textContent).toMatch(/Eagle|Penguin|Parrot/)
    );
  });

  test('filters animals by multiple classes when multiple labels are clicked', () => {
    const birdsLabel = screen.getByText('Birds');
    const mammalsLabel = screen.getByText('Mammals');
    fireEvent.click(birdsLabel);
    fireEvent.click(mammalsLabel);
    const visibleTiles = screen.getAllByTestId('animal-tile-id');
    expect(visibleTiles.length).toBe(6);
    visibleTiles.forEach((tile) =>
      expect(tile.textContent).toMatch(
        /Eagle|Penguin|Parrot|Lion|Tiger|Elephant/
      )
    );
  });

  test('applies correct styles to selected label', () => {
    const label = screen.getByText('Birds');
    expect(label).not.toHaveStyle('background-color: #333; color: #fff');
    fireEvent.click(label);
    expect(label).toHaveStyle('background-color: #333; color: #fff');
  });
});
