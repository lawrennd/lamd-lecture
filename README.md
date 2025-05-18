# LaMD Lecture System

A template repository for creating academic lecture courses using Jekyll and LaMD (Literate Academic Markdown).

## Overview

lamd-lecture provides a skeleton structure for building lecture courses with the following features:
- Multiple output formats (slides, notes, web pages) from a single markdown source
- Jekyll-based website generation for course materials
- LaMD macros for consistent content rendering

## Getting Started

1. Use this repository as a template
2. Configure `_config.yml` with your course details
3. Add lecture content to the `_lamd` directory
4. Compile lectures with `maketalk` command

## Repository Structure

```
lecture-course/
├── _config.yml           # Jekyll configuration
├── _data/                # YAML data files for site content
├── _includes/            # Jekyll template partials
├── _lamd/                # LaMD files containing lamd sources
├── _layouts/             # Jekyll page templates
├── _lectures/            # Compiled Lecture html files
├── _notebooks/           # Compiled Jupyter notebooks
├── _practicals/          # Compiled Practical exercises
├── _sass/                # CSS styling
├── assets/               # Static assets (images, js, css)
├── index.html            # Home page
└── slides/               # Compiled reveal.js presentation slides
```

## Usage

Lectures are compiled using the `maketalk` command:

```bash
cd _lamd
maketalk 01-introduction.md 
```

See the repositories at [mlphysical](https://github.com/mlatcl/mlphysical) or [advds](https://github.com/mlatcl/advds) for examples of complete lecture courses using the LaMD system.

## Learn More

For more information about LaMD, see [the LaMD documentation](https://inverseprobability.com/lamd).
