FROM python:3.9
ENV PYTHONUNBUFFERED 1

# gdal dependencies for postgis
RUN apt-get update && apt-get install -y binutils libproj-dev gdal-bin

ARG requirement

# Allows docker to cache installed dependencies between builds
COPY ./requirements requirements
RUN pip install --upgrade pip
RUN pip install "setuptools<58.0"
RUN pip install -r ./requirements/base.txt

# Adds our application code to the image
COPY ./ code
WORKDIR code

ENV PORT=8000
EXPOSE $PORT